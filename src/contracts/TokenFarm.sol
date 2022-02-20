pragma solidity >=0.5.0;

import "./DappToken.sol";
import "./DaiToken.sol";

contract TokenFarm {
  string public name = 'Dapp Token Farm';
  DappToken public dappToken;
  DaiToken public daiToken;

  constructor(DappToken _dappToken, DaiToken _daiToken) public {
    /**
      run only once when it deployed on network
      DappToken & DaiToken already deployed on network 
      Now, We deploy new token
    */
    dappToken = _dappToken;
    daiToken = _daiToken;
  }
}
