const DappToken = artifacts.require('DappToken');
const DaiToken = artifacts.require('DaiToken');
const TokenFarm = artifacts.require('TokenFarm');

module.exports = async function(deployer, network, accounts) {
  /**
   * 
   * accounts - all accounts from ganache
   */
  await deployer.deploy(DaiToken);
  // fetch the daiToken on the network after deploy
  const daiToken = await DaiToken.deployed();

  await deployer.deploy(DappToken);
  // fetch the dappToken on the network after deploy
  const dappToken = await DappToken.deployed();
  
  /**
   * params pass into constructor(DappToken _dappToken, DaiToken _daiToken)
   */
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed();

  // Transfer all the tokens to TokenFarm 
  await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')

  // Transfer 100 Mock DAI tokens to investor
  await daiToken.transfer(accounts[1], '100000000000000000000')

};
