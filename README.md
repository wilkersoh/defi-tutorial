# What DAPP does
1. Three Type of Token 
  a. Dai Token
  b. Dapp Token
  c. Token Farm
2. Dai Token using from investor to deposit into Token Farm for earning Dapp Token

# Start
$ yarn install

# Compile Contract
$ truffle compile

# Deploy Contract into BlockChain
$ truffle migrate

# Replace Contract on the BlockChain
$ truffle migrate --reset

# Intract Contract on the BlockChain
$ truffle console
```bash
$ tokenFarm = await TokenFarm.deployed(); -> it will return undefined

$ tokenFarm -> list the tokenFarm

$ tokenFarm.address -> return smart contract address in that network
```

# Get mDai balance
$ truffle console
$ mDai = await DaiToken.deployed()
$ accounts = await web3.eth.getAccounts()
$ accounts[1]
$ balance = await mDai.balanceOf(accounts[1])
$ balance.toString()
$ formattedBalance = web3.utils.fromWei(balance) -> convert into Ether unit

# Ganache
- Link to Workspace Defi-tutorial



[Project's Reference](https://www.youtube.com/watch?v=CgXQC4dbGUE)
