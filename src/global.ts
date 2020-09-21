import { ethers } from 'ethers';
import { CustomWallet } from './ethereum/custom-wallet';

import { RentingDappManager } from './ethereum/typechain/RentingDappManager';


declare global {
    interface Window {
      provider: ethers.providers.JsonRpcProvider;
      wallet: CustomWallet | undefined;
      rentingDappInstance: RentingDappManager;
      ethereum: ethers.providers.ExternalProvider;
    }
  }