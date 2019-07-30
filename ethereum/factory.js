import web3 from './web3';
import CampaignFactory from './build/Procurement.json';
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5295fb221a6a12ffb3d6928d9160ef7c91cd25f3'
);
export default instance;
