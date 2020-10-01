import { ethers } from 'ethers';
import { CustomWallet } from './custom-wallet';

import { RentingDappManagerFactory } from './typechain/RentingDappManagerFactory';

const config = {
    ESN: {
      rentingdappmanager: '0x4356f72990840336A9E23246E6F5d3b2f89eBae1',
      kycdapp: '0xC4336494606203e3907539d5b462A5cb7853B3C6'
    },
};

window.provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_NODE_URL);

window.rentingDappInstance = RentingDappManagerFactory.connect(config.ESN.rentingdappmanager, window.provider);

if(process.env.REACT_APP_NODE_ENV === 'development')
{
  window.wallet = new CustomWallet("0x1c1cfc60ba7f710bf0124f999cf7867d1de16ffbe35f1e26c2a0a5890b4aa146", window.provider); //229
  //window.wallet = new CustomWallet("0xb8942d7d379542e32aec19d5d7fe07d7981f951412695abef56341befd32f7a3", window.provider);  //93f      
}                           