import 'web3/index';
import Abi from '../config/abi';
import {Address} from '../config/contract';

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

  if(!web3.isConnected() ){
    console.error('Web3 not connected to suitable provider');
    return;
  }

  this.web3 = web3;

  if(typeof web3.eth.accounts != 'object' ||  web3.eth.accounts.length < 1){
    console.error('No account found, or accounts locked');
    return;
  }

  web3.eth.defaultAccount = web3.eth.accounts[0];
  this.accounts = web3.eth.accounts;
  console.log(web3)

  this.contract = web3.eth.contract(Abi).at(Address);
}

Contract.prototype = {

  fetchPlayer: function(){

  },
  createPlayer: function(){
    const name = prompt('Kindly set your Screen name');

    this.contract.createAccount(name,function(e,r){
      if(e)
        console.error(e);
      console.log('player created',r);
    })
  },
  saveGame: function(buildingData,upgradeData){

    this.contract.save(buildingData,upgradeData,function(e,r){
      if(e)
        console.error(e);
      console.log('player created',r);
    })
  },
  harvestResources: function(buildingsToHarvest){

    this.contract.harvestResources(buildingsToHarvest,function(e,r){
      if(e)
        console.error(e);
      console.log('player created',r);
    })
  }





}


export default Contract;
