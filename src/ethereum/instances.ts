import { ethers } from 'ethers';

import { es, CustomProvider } from 'eraswap-sdk';
// import { RentingDappManagerFactory } from 'eraswap-sdk/dist/typechain/ESN';
import { RentingDappManagerFactory } from './typechain/RentingDappManagerFactory';


// const config = {
//     ESN: {
//       rentingdappmanager: es.addresses['production'].ESN.rentingDappManager,
//     },
// };

window.provider = new CustomProvider('mainnet');

// window.rentingDappInstance = RentingDappManagerFactory.connect(config.ESN.rentingdappmanager, window.provider);
window.rentingDappInstance = RentingDappManagerFactory.connect('0x7F8342b22f4051Ed6E96320c984e7e26D2872262', window.provider);

if(process.env.REACT_APP_NODE_ENV === 'development')
{
  // window.wallet = new ethers.Wallet("0x1c1cfc60ba7f710bf0124f999cf7867d1de16ffbe35f1e26c2a0a5890b4aa146", window.provider); //229
  // window.wallet = new ethers.Wallet("0xb8942d7d379542e32aec19d5d7fe07d7981f951412695abef56341befd32f7a3", window.provider);  //93f      

  // window.wallet = new ethers.Wallet("0x671f38c40868b5d92c481e0f82ccf3c1a597f5a971d6f89ed7bd16c24c7d5e37", window.provider); // 0x646cC3cbe2cdDB26bbdEE94579479FE062c3FD00
  window.wallet = new ethers.Wallet("0xe67156a04862a7c0c93e77d1d4ebd2a7a7b16ec4971ed57248cbba68d5d01106", window.provider); // 0x732397c90ADBADE7D725A122de8c298476A6a878
}                           