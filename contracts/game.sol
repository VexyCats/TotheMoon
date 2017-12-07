pragma solidity ^0.4.11;

contract Game {
    
    address owner;
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    uint256 totalPlayers;
   
    struct Building{
    harvestTime,
    level, 
    x,
    y}
    
    struct player{
        uint256 playerID;
        Building[] playerBuildings;
        uint level;
        
    }
    mapping (address => player) public listOfPlayers;
    mapping(uint => player) public playerLevel;
    
    
    mapping (uint => Building) public buildingLevel;
   
    
    
    
    function Game() {
    
    totalPlayers = 0;
        
    }
    /* Needs to take player address and create a new player
    *   gives starter amount
    *
    */
      function createAccount() return (uint _playerID){
     
     
     listOfPlayers[msg.sender].playerID = totalPlayers++;
     
     listOfPlayers[msg.sender].resources[0]  = 10;
     
     
        }
        
        /* Needs to save the player data
        *   Will be called from the phaser game after so many minutes has cooled down between requests
        *   needs to save: map tiles, resource amount, inventory amount, player stats, probably more
        *
        */
    function save(uint buildingData,) payable{
    
    
    }
    
    function setPlayerBuildings(uint harvestTime, uint level, uint x, uint y) internal {
    
    
    
    
    }
    

}
contract ERC20 {
    
     function balanceOf(address _owner) constant returns (uint balance);
     function transfer(address _to, uint _value) returns (bool success);
     function transferFrom(address _from, address _to, uint _value) returns (bool success);
     function approve(address _spender, uint _value) returns (bool success);
     function allowance(address _owner, address _spender) constant returns (uint remaining);
     event Transfer(address indexed _from, address indexed _to, uint _value);
     event Approval(address indexed _owner, address indexed _spender, uint _value);
 }

contract Resources is ERC20 {


    struct resourceList {
        uint wood;
        uint metal;
        uint soil;
        uint water;
    
    }
    
    mapping (address => resourceList) public resourceBalances
    
    
    
    function balanceOf(address _owner) constant returns (uint256 balance) {
         return balances[_owner];
     }
  
}

