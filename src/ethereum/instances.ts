import { ethers } from 'ethers';
import { CustomWallet } from './custom-wallet';

import { RentingDappManagerFactory } from './typechain/RentingDappManagerFactory';

const config = {
    ESN: {
      rentingdappmanager: '0x20eC91411C9646785Db14be75391C09D5b33A407',
      kycdapp: '0xF9FCb8678dB15A5507A5f5414D68aBB2f4568E27'
    },
};

window.provider = new ethers.providers.JsonRpcProvider('https://node0.testnet.eraswap.network');

window.rentingDappInstance = RentingDappManagerFactory.connect(config.ESN.rentingdappmanager, window.provider);

window.wallet = new CustomWallet("0x1c1cfc60ba7f710bf0124f999cf7867d1de16ffbe35f1e26c2a0a5890b4aa146", window.provider); //229
//window.wallet = new CustomWallet("0xb8942d7d379542e32aec19d5d7fe07d7981f951412695abef56341befd32f7a3", window.provider);  //93f                                 