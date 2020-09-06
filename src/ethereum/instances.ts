import { ethers } from 'ethers';
import { CustomWallet } from './custom-wallet';

import { RentingDappManagerFactory } from './typechain/RentingDappManagerFactory';

const config = {
    ESN: {
      rentingdappmanager: '0x00f9B1F99B9cFf20Bee41d9bA3b82bD6647819d2',
      kycdapp: '0xF9FCb8678dB15A5507A5f5414D68aBB2f4568E27'
    },
};

window.provider = new ethers.providers.JsonRpcProvider('https://node0.testnet.eraswap.network');

window.rentingDappInstance = RentingDappManagerFactory.connect(config.ESN.rentingdappmanager, window.provider);