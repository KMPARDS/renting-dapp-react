import { ethers, version } from 'ethers';
import { Deferrable, resolveProperties } from '@ethersproject/properties';
import { TransactionRequest } from '@ethersproject/abstract-provider';
import { ExternallyOwnedAccount } from '@ethersproject/abstract-signer';

import { Logger } from '@ethersproject/logger';
const logger = new Logger(version);

export class CustomWallet extends ethers.Wallet {
  constructor(
    privateKey: string | ethers.utils.Bytes | ExternallyOwnedAccount | ethers.utils.SigningKey,
    provider?: ethers.providers.JsonRpcProvider
  ) {
    super(privateKey, provider);
  }

  connect(provider: ethers.providers.JsonRpcProvider): CustomWallet {
    return new CustomWallet(this.privateKey, provider);
  }

  async call(
    transaction: Deferrable<TransactionRequest>,
    blockTag?: string | number | undefined
    // @ts-ignore
  ): Promise<string> {
    try {
      const resp = await super.call(transaction, blockTag);
      console.log(resp);

      return resp;
    } catch (err) {
      const data = err?.body?.error?.data;

      if (typeof data === 'string' && data.slice(0, 9) === 'Reverted ') {
        const actualData = data.slice(9);
        const iface = new ethers.utils.Interface(['function Error(string)']);

        logger.throwError(
          actualData !== '0x'
            ? iface.decodeFunctionData('Error', actualData)[0]
            : 'Call was reverted without a revert reason',
          Logger.errors.CALL_EXCEPTION
        );
      } else {
        throw err;
      }
    }
  }


  async populateTransaction(
    transaction: Deferrable<TransactionRequest>
  ): Promise<TransactionRequest> {
    const tx: Deferrable<TransactionRequest> = await resolveProperties(
      this.checkTransaction(transaction)
    );

    if (tx.gasLimit == null || tx.gasLimit instanceof Promise) {
      tx.gasLimit = await this.estimateGas(tx).catch(async (error) => {
        let { from, to, data, value } = tx;

        if(typeof(value) == "object")
        {
          value = value.toHexString();
        }
        const provider = this.provider as ethers.providers.JsonRpcProvider;

        if (provider.send) {
          let result: any;
          try {
            result = await provider.send('trace_call', [
              { from, to: await to, data, value },
              ['vmtrace', 'trace'],
            ]);
          } catch (error) {
            console.log('trace_call error:', error.message);
          }

          if (result?.output) {
            console.log(result);

            const i = new ethers.utils.Interface(['function Error(string)']);
            return logger.throwError(
              result?.output !== '0x'
                ? i.decodeFunctionData('Error', result.output)[0]
                : 'Call was reverted without a revert reason',
              Logger.errors.CALL_EXCEPTION
            );
          }
        }

        return logger.throwError(
          'cannot estimate gas; transaction may fail or may require manual gas limit',
          Logger.errors.UNPREDICTABLE_GAS_LIMIT,
          {
            error: error,
            tx: tx,
          }
        );
      });
    }

    return await super.populateTransaction(tx);
  }
}

// @ts-ignore
window._CustomWallet = CustomWallet;