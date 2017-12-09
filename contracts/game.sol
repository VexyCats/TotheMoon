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
 function createAccount(string _screenName) payable returns (uint _playerID)  { 
     
     
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
    function save(uint[2][5] buildingData, uint[5] upgradeData){
    uint x;
    uint  y; 
   
     if(buildingData[0][0] > 0){
         
         buildingData[0][0] =  x;
         buildingData[0][1] = y;
        setBuilding1(x,y, msg.sender);
     }
     if(buildingData[1][0] > 0){
        
         buildingData[1][0] =  x;
         buildingData[1][1] = y;
         setBuilding2(x,y, msg.sender);
       
     }
     if(buildingData[2][0] > 0){
        
         
         buildingData[2][0] =  x;
         buildingData[2][1] = y;
        setBuilding3(x,y, msg.sender);
        
        
     }
     if(buildingData[3][0] > 0){
          buildingData[3][0] =  x;
         buildingData[3][1] = y;
       setBuilding4(x,y, msg.sender);
     }
     if(buildingData[4][0] > 0){ 
         buildingData[4][0] =  x;
         buildingData[4][1] = y;
         setBuilding5(x,y, msg.sender);
     }
     
 
    
    
    
    
    
    }
    
  
     function setBuilding1(uint x, uint y, address _sender) internal {
        
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].id =  1;
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].y = y ; 
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].x = x ;
       
        listOfPlayers[_sender].numberOfBuildings++;
    }
    function setBuilding2(uint x, uint y, address _sender) internal {
        
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].id =  2;
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].y = y ; 
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].x = x ;
        listOfPlayers[_sender].numberOfBuildings++;
    }
     function setBuilding3(uint x, uint y, address _sender) internal {
        
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].id =  3;
    listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].y = y ; 
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].x = x ;
        listOfPlayers[msg.sender].numberOfBuildings++;
    }
     function setBuilding4(uint x, uint y, address _sender) internal {
        
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].id =  4;
         listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].y = y ; 
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].x = x ;
        listOfPlayers[msg.sender].numberOfBuildings++;
    }
     function setBuilding5(uint x, uint y, address _sender) internal {
        
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].id =  5;
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].y = y ; 
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].x = x ;
        listOfPlayers[msg.sender].numberOfBuildings++;
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

