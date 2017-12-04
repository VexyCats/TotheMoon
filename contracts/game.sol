pragma solidity ^0.4.11;

contract Game {
    
    address owner;
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    uint256 totalPlayers;
   
    
    struct player{
        uint256 playerID;
        uint[] Buildings;
        uint level;
    }
    mapping (address => player) public listOfPlayers;
    mapping(uint => player) public playerLevel;
    
    struct Building{
    harvestTime,
    level, 
    x,
    y}
    mapping (uint => Building) public buildingLevel;
   
    
    
    
    function Game() {
    
    totalPlayers = 0;
        
    }
    /* Needs to take player address and create a new player
    *   gives starter amount
    *
    */
      function createAccount(){
     
    
     listOfPlayers[msg.sender].playerID = totalPlayers++;
     
     listOfPlayers[msg.sender].goldAmount  = 10;
        }
        
        /* Needs to save the player data
        *   Will be called from the phaser game after so many minutes has cooled down between requests
        *   needs to save: map tiles, resource amount, inventory amount, player stats, probably more
        *
        */
    function save(){
    
    
    }
    
    function spawn(bytes32 planetName) payable {
        Planet newPlanet;
        newPlanet.name = planetName;
        
        planets[msg.sender] = newPlanet;
  }
}

contract Resources {

}

