pragma solidity ^0.4.3;

contract Game {
    
    address owner;
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    uint256 totalPlayers;
   
    struct Building {
    uint id;
    uint harvestTime;
    
    uint level;
    uint x;
    uint y;
        
    }
    mapping (address =>  Building ) public buildings;
    struct player{
        uint numberOfBuildings;
        uint256 playerID;
        Building[] playerBuildings;
        uint level;
        
    }
    mapping (address => player) public listOfPlayers;
    mapping(uint => player) public playerLevel;
    
    
   
   
    
    
    
    function Game() {
    
    totalPlayers = 0;
        
    }
    /* Needs to take player address and create a new player
    *   gives starter amount
    *
    */
 function createAccount(string _screenName) returns (uint _playerID){
     
     
     listOfPlayers[msg.sender].playerID = totalPlayers++;
   
     listOfPlayers[msg.sender].playerBuildings[0].harvestTime = 0;
     listOfPlayers[msg.sender].playerBuildings[0].x = 0;
     listOfPlayers[msg.sender].playerBuildings[0].y = 0;
     listOfPlayers[msg.sender].playerBuildings[0].level = 0;
     
     
        }
        
        /* Needs to save the player data
        *   Will be called from the phaser game after so many minutes has cooled down between requests
        *   needs to save: map tiles, resource amount, inventory amount, player stats, probably more
        *
        */
    function save(uint[5][2] memory buildingData, uint[5] upgradeData){
     uint x;
     uint  y;
     uint id;
     if(buildingData[0][0] > 0){
         id = 1;
         buildingData[0][0] =  x;
         buildingData[0][1] = y;
         listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].id =  id;
        
        listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].y = y ; 
        listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].x = x ;
      listOfPlayers[msg.sender].numberOfBuildings++;
     }
     if(buildingData[1][0] > 0){
        id = 2;
         buildingData[1][0] =  x;
         buildingData[1][1] = y;
         listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].id =  id;
        
        listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].y = y ; 
        listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].x = x ;
      listOfPlayers[msg.sender].numberOfBuildings++;
     }
     if(buildingData[2][0] > 0){
         id = 3;
         
         buildingData[2][0] =  x;
         buildingData[2][1] = y;
          listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].id =  id;
        
        listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].y = y ; 
        listOfPlayers[msg.sender].playerBuildings[listOfPlayers[msg.sender].numberOfBuildings].x = x ;
      listOfPlayers[msg.sender].numberOfBuildings++;
     }
     if(buildingData[3][0] > 0){
         id = 4;
     }
     if(buildingData[4][2] > 0){}
     if(buildingData[5][0] > 0){}
 
    
    
    
    
    
    }
    
    function setPlayerBuildings(uint harvestTime, uint level, uint x, uint y) internal {
    
    //update( buildings [ msg.sender ] [ index ] )
    
    
    }
    

}
contract ERC20 {
    
    
 }

contract Resources is ERC20 {


    struct resourceList {
        uint wood;
        uint metal;
        uint soil;
        uint water;
    
    }
    
    mapping (address => resourceList) public resourceBalances;
    
    
    
    function balanceOf(address _owner) constant returns (uint256 balance) {
        // return balances[_owner];
     }
  
}

