import { ethers } from 'ethers';
import { solidityKeccak256 } from 'ethers/lib/utils';
import { CustomWallet } from './custom-wallet';

//import { RentingDappManagerFactory } from './typechain/RentingDappManagerFactory';
import { es, CustomProvider } from 'eraswap-sdk';
import { RentingDappManagerFactory } from 'eraswap-sdk/dist/typechain/ESN';

const config = {
    ESN: {
      rentingdappmanager: es.addresses['production'].ESN.rentingDappManager,
      // kycdapp: es.addresses['development'].ESN.kycdapp
    },
};

//window.provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_NODE_URL);
window.provider = new es.CustomProvider('mainnet');

window.rentingDappInstance = RentingDappManagerFactory.connect(config.ESN.rentingdappmanager, window.provider);

if(process.env.REACT_APP_NODE_ENV === 'development')
{
  // window.wallet = new ethers.Wallet("0x1c1cfc60ba7f710bf0124f999cf7867d1de16ffbe35f1e26c2a0a5890b4aa146", window.provider); //229
  // window.wallet = new ethers.Wallet("0xb8942d7d379542e32aec19d5d7fe07d7981f951412695abef56341befd32f7a3", window.provider);  //93f      

  // window.wallet = new ethers.Wallet("0x671f38c40868b5d92c481e0f82ccf3c1a597f5a971d6f89ed7bd16c24c7d5e37", window.provider); // 0x646cC3cbe2cdDB26bbdEE94579479FE062c3FD00
  window.wallet = new ethers.Wallet("0xe67156a04862a7c0c93e77d1d4ebd2a7a7b16ec4971ed57248cbba68d5d01106", window.provider); // 0x732397c90ADBADE7D725A122de8c298476A6a878
}                           