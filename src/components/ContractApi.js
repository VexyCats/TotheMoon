import 'web3/index';
import Abi from '../config/abi';
import Address from '../config/contract';

var Contract = function(){
  window? '' : window = {};
  global? '' : global = {};

  var web3 = window.web3 || global.web3;

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(Web3.givenProvider || web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  if(!web3){
    console.error('Web3 not found');
    return;
  }

  if(!web3.isConnected){
    console.error('Web3 not connected to suitable provider');
  }

  console.log(web3)
}

Contract.prototype = {



}


export default Contract;
