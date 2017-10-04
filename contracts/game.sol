pragma solidity ^0.4.11;

contract Game {
    
    address owner;
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    
    struct Planet {
        bytes32 name;
        uint iron;
        uint gold;
        uint diamonds;
        uint oil;
        uint spacegoo;
    }
    mapping(address => Planet) public planets;

    function Game() {
        
    }
    
    function spawn(bytes32 planetName) payable {
        Planet newPlanet;
        newPlanet.name = planetName;
        
        planets[msg.sender] = newPlanet;
  }
}
