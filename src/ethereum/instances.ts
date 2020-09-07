import { ethers } from 'ethers';
import { CustomWallet } from './custom-wallet';

import { RentingDappManagerFactory } from './typechain/RentingDappManagerFactory';

const config = {
    ESN: {
      rentingdappmanager: '0xb8c902d2C4f6e67dBA1a27413204e330D4b5026E',
      kycdapp: '0xF9FCb8678dB15A5507A5f5414D68aBB2f4568E27'
    },
};

window.provider = new ethers.providers.JsonRpcProvider('https://node0.testnet.eraswap.network');

window.rentingDappInstance = RentingDappManagerFactory.connect(config.ESN.rentingdappmanager, window.provider);

window.wallet = new ethers.Wallet("0xb8942d7d379542e32aec19d5d7fe07d7981f951412695abef56341befd32f7a3", window.provider);