const { assert } = require('chai');

const DappToken = artifacts.require('DappToken');
const DaiToken = artifacts.require('DaiToken');
const TokenFarm = artifacts.require('TokenFarm');

/**
  Build a Test 
  Demo a environment for the test
*/
require('chai')
  .use(require('chai-as-promised'))
  .should();

const tokens= (n) => {
  return web3.utils.toWei(n, 'Ether')
}

  
contract('TokenFarm', (accounts) => {
  const [ owner, investor ] = accounts;

  let daiToken, dappToken, tokenFarm

  before(async () => {
    // Load Contracts
    daiToken = await DaiToken.new();
    dappToken = await DappToken.new();
    tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address);

    // Transfer all Dapp tokens to TokenFarm
    await dappToken.transfer(tokenFarm.address, tokens('1000000'))

    // Send Tokens to investor
    await daiToken.transfer(investor, tokens('100'), { from: owner })
  })
  
  describe('Mock Dai deployment', async () => {
    it('has a name', async () => {
      const name = await daiToken.name();
      assert.equal(name, 'Mock DAI Token')
    })
  })

  describe('Dapp token deployment', async () => {
    it('has a name', async () => {
      const name = await dappToken.name();
      assert.equal(name, 'DApp Token')
    })
  })

  describe('Token Farm deployment', async () => {
    it('has a name', async () => {
      const name = await tokenFarm.name();
      assert.equal(name, 'Dapp Token Farm')
    })

    it('contract has tokens', async () => {
      let balance = await dappToken.balanceOf(tokenFarm.address)
      assert.equal(balance.toString(), tokens('1000000'));
    })
    
  })
})
