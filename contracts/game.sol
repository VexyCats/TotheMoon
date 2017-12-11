pragma solidity ^0.4.3;




contract Game {
    
    address owner;
    TokenERC20 r;
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    uint256 totalPlayers;
    uint256 building1Time = 150;
    uint256 building2Time = 350;
    uint256 building3Time = 450;
    uint256 building4Time = 650;
    uint256 building5Time = 1050;
    
    struct Harvest {
          uint Wood;
          uint  Water;
          uint Soil;
          uint Metal;
          uint Oxygen;
        
    }

mapping( uint => mapping( uint => Harvest ) ) harvestValues;


    struct resourcesRequired {
        uint256 Wood;
        uint256 Water;
        uint256 Soil;
        uint256 Metal;
        uint256 Oxygen;
    }
  mapping (uint256  => mapping(uint => resourcesRequired) ) public requiredResources;
    struct Building {
        uint id;
        uint harvestTime;
        uint level;
        uint x;
        uint y;
        
    }
    
    struct player{
        uint numberOfBuildings;
        uint256 playerID;
        Building[] playerBuildings;
        uint level;
       
        
    }
    mapping (address => player) public listOfPlayers;
    mapping(uint => player) public playerLevel;
    
    
   
   
    
    
    
    function Game() {
        
    //set Harvest values starter building (gives wood)
    harvestValues[0][1].Wood = 10;
    //set harvest Values second building (gives water, soil)
    harvestValues[0][2].Wood = 20;
    harvestValues[0][2].Water = 20;
    //set harvest values for third building gives (metal)
    harvestValues[0][3].Water = 20;
    harvestValues[0][3].Soil = 5;
    //set harvest values for fourth building gives (Oxygen)
    harvestValues[0][4].Soil = 50;
    harvestValues[0][4].Metal = 10;
    //Set values for last building gives
    harvestValues[0][5].Oxygen = 100;
    harvestValues[0][5].Metal = 500;
    
    // set resourcesRequired values for first building
    requiredResources[0][0].Wood = 10;
     // set resourcesRequired values for seond building
    requiredResources[0][1].Wood = 100;
     // set resourcesRequired values for third building
    requiredResources[0][2].Wood = 500;
    requiredResources[0][2].Water = 200;
     // set resourcesRequired values for fourth building
     requiredResources[0][3].Soil = 100;
    requiredResources[0][3].Water = 500;
      // set resourcesRequired values for fifth building
    requiredResources[0][4].Soil = 5000;
    requiredResources[0][4].Metal = 1000;
    
    
    
    totalPlayers = 0;
    
    }
    /* Needs to take player address and create a new player
    *   gives starter amount
    *
    */
    function setResourceContract(address addr)  onlyOwner {
        TokenERC20 r = TokenERC20(addr);
        
    }
 function createAccount(string _screenName) returns (uint _playerID)  { 
     
     
     listOfPlayers[msg.sender].playerID = totalPlayers++;
     r.harvestResource(20,0,0,0,0, msg.sender);
     return listOfPlayers[msg.sender].playerID;
        }
        
        /* Needs to save the player data
        *   Will be called from the phaser game after so many minutes has cooled down between requests
        *   
        *
        */
    function save(uint[2][5] buildingData, uint[5] upgradeData){
    uint x;
    uint  y; 
   
     if(buildingData[0][0] > 0){
         
         buildingData[0][0] =  x;
         buildingData[0][1] = y;
        setBuilding(1,x,y, msg.sender);
     }
     if(buildingData[1][0] > 0){
        
         buildingData[1][0] =  x;
         buildingData[1][1] = y;
         setBuilding(2,x,y, msg.sender);
       
     }
     if(buildingData[2][0] > 0){
        
         
         buildingData[2][0] =  x;
         buildingData[2][1] = y;
        setBuilding(3,x,y, msg.sender);
        
        
     }
     if(buildingData[3][0] > 0){
          buildingData[3][0] =  x;
         buildingData[3][1] = y;
       setBuilding(4,x,y, msg.sender);
     }
     if(buildingData[4][0] > 0){ 
         buildingData[4][0] =  x;
         buildingData[4][1] = y;
         setBuilding(5,x,y, msg.sender);
     }
    }
    
    function harvestResources(address _sender, uint256[20] _buildings) {
        //loop
        
    uint256 newWood;
      uint256 newWater;
      uint256 newSoil;
      uint256 newMetal;
      uint256 newOxygen;
        
       
           for(uint i = 0; i < 20; i++){
               
            if(_buildings[i] == 1){
                if(listOfPlayers[_sender].playerBuildings[_buildings[i]].harvestTime > (block.timestamp + building1Time) ){
                newWood += harvestValues[0][1].Wood;
                
            }
         } 
          if(_buildings[i] == 2){
                if(listOfPlayers[_sender].playerBuildings[_buildings[i]].harvestTime > (block.timestamp + building2Time) ){
                newWood += harvestValues[0][2].Wood;
                newWater += harvestValues[0][2].Water;
                
            }
         }
          if(_buildings[i] == 3){
                if(listOfPlayers[_sender].playerBuildings[_buildings[i]].harvestTime > (block.timestamp + building3Time) ){
                newWater += harvestValues[0][3].Water;
                newSoil += harvestValues[0][3].Soil;
            }
         }
          if(_buildings[i] == 4){
                if(listOfPlayers[_sender].playerBuildings[_buildings[i]].harvestTime > (block.timestamp + building4Time) ){
                 
               newSoil  += harvestValues[0][4].Soil;
               newMetal += harvestValues[0][4].Metal;
            }
         }
          if(_buildings[i] == 5){
                if(listOfPlayers[_sender].playerBuildings[_buildings[i]].harvestTime > (block.timestamp + building5Time) ){
                newMetal += harvestValues[0][5].Metal;
                newOxygen += harvestValues[0][5].Oxygen;
            }
         }
         r.harvestResource(newWood,newWater, newSoil, newMetal, newOxygen, _sender);
    }
    }
  
   function setBuilding(uint id, uint x, uint y, address _sender) internal {
    require(id > 0 && id < 6);
    
    
    uint[5] memory balance = r.getBalances(_sender);
        
    require(balance[0] >= requiredResources[id][1].Wood); 
    require(balance[1] >= requiredResources[id][1].Water);
    require(balance[2] >= requiredResources[id][1].Soil);
    require(balance[3] >= requiredResources[id][1].Metal);
    require(balance[4] >= requiredResources[id][1].Oxygen);
       
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].id =  id;
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].y = y ; 
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].x = x ;
        listOfPlayers[_sender].playerBuildings[listOfPlayers[_sender].numberOfBuildings].harvestTime = block.timestamp ;
        listOfPlayers[_sender].numberOfBuildings++;
    }

     
    }

interface tokenRecipient { function receiveApproval(address _from, uint256 _value, address _token, bytes _extraData) public; }

contract TokenERC20 {
    // Public variables of the token
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    // 18 decimals is the strongly suggested default, avoid changing it
    uint256 public totalSupply;
    struct Resources {
        uint256 Wood;
        uint256 Water;
        uint256 Soil;
        uint256 Metal;
        uint256 Oxygen;
        
    }
     address owner;
     modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    // This creates an array with all balances
    mapping (address => Resources ) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    // This generates a public event on the blockchain that will notify clients
    event Transfer(address indexed from, address indexed to, uint256 value, string _resource);

    // This notifies clients about the amount burnt
   event Burn(address indexed from, uint256 value, uint256 id);
   event Mint(address to, uint256 resources);
    
     event Create(address indexed from, uint256 value);
    address gameContract;
    /**
     * Constrctor function
     *
     * Initializes contract with initial supply tokens to the creator of the contract
     */
    function TokenERC20(
        uint256 initialSupply,
        string tokenName,
        string tokenSymbol
    ) public {
        totalSupply = initialSupply * 10 ** uint256(decimals);  // Update total supply with the decimal amount
        balanceOf[msg.sender].Wood = totalSupply;                // Give the creator all initial tokens
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                               // Set the symbol for display purposes
    }
    
    function getBalances(address _addr) public constant returns (uint[5]){
    		return ( [balanceOf[_addr].Wood,balanceOf[_addr].Water,balanceOf[_addr].Soil,balanceOf[_addr].Metal,balanceOf[_addr].Oxygen] );
    }

    /**
     * Internal transfer, only can be called by this contract
     */
    function _transferWood(address _from, address _to, uint _value) internal {
        // Prevent transfer to 0x0 address. Use burn() instead
        require(_to != 0x0);
        // Check if the sender has enough
        require(balanceOf[_from].Wood >= _value);
        // Check for overflows
        require(balanceOf[_to].Wood + _value > balanceOf[_to].Wood);
        // Save this for an assertion in the future
        uint previousBalances = balanceOf[_from].Wood + balanceOf[_to].Wood;
        // Subtract from the sender
        balanceOf[_from].Wood -= _value;
        // Add the same to the recipient
        balanceOf[_to].Wood += _value;
        Transfer(_from, _to, _value, "Wood");
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
        assert(balanceOf[_from].Wood + balanceOf[_to].Wood == previousBalances);
    }
        function _transferWater(address _from, address _to, uint _value) internal {
        // Prevent transfer to 0x0 address. Use burn() instead
        require(_to != 0x0);
        // Check if the sender has enough
        require(balanceOf[_from].Water >= _value);
        // Check for overflows
        require(balanceOf[_to].Water + _value > balanceOf[_to].Water);
        // Save this for an assertion in the future
        uint previousBalances = balanceOf[_from].Water + balanceOf[_to].Water;
        // Subtract from the sender
        balanceOf[_from].Water -= _value;
        // Add the same to the recipient
        balanceOf[_to].Water += _value;
        Transfer(_from, _to, _value, "Water");
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
        assert(balanceOf[_from].Water + balanceOf[_to].Water == previousBalances);
    }
        function _transferSoil(address _from, address _to, uint _value) internal {
        // Prevent transfer to 0x0 address. Use burn() instead
        require(_to != 0x0);
        // Check if the sender has enough
        require(balanceOf[_from].Soil >= _value);
        // Check for overflows
        require(balanceOf[_to].Soil + _value > balanceOf[_to].Soil);
        // Save this for an assertion in the future
        uint previousBalances = balanceOf[_from].Soil + balanceOf[_to].Soil;
        // Subtract from the sender
        balanceOf[_from].Soil -= _value;
        // Add the same to the recipient
        balanceOf[_to].Soil += _value;
        Transfer(_from, _to, _value, "Soil");
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
        assert(balanceOf[_from].Soil + balanceOf[_to].Soil == previousBalances);
    }
    function _transferMetal(address _from, address _to, uint _value) internal {
        // Prevent transfer to 0x0 address. Use burn() instead
        require(_to != 0x0);
        // Check if the sender has enough
        require(balanceOf[_from].Metal >= _value);
        // Check for overflows
        require(balanceOf[_to].Metal + _value > balanceOf[_to].Metal);
        // Save this for an assertion in the future
        uint previousBalances = balanceOf[_from].Metal + balanceOf[_to].Metal;
        // Subtract from the sender
        balanceOf[_from].Metal -= _value;
        // Add the same to the recipient
        balanceOf[_to].Metal += _value;
        Transfer(_from, _to, _value, "Metal");
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
        assert(balanceOf[_from].Metal + balanceOf[_to].Metal == previousBalances);
    }
     function _transferOxygen(address _from, address _to, uint _value) internal {
        // Prevent transfer to 0x0 address. Use burn() instead
        require(_to != 0x0);
        // Check if the sender has enough
        require(balanceOf[_from].Oxygen >= _value);
        // Check for overflows
        require(balanceOf[_to].Oxygen + _value > balanceOf[_to].Oxygen);
        // Save this for an assertion in the future
        uint previousBalances = balanceOf[_from].Oxygen + balanceOf[_to].Oxygen;
        // Subtract from the sender
        balanceOf[_from].Oxygen -= _value;
        // Add the same to the recipient
        balanceOf[_to].Oxygen += _value;
        Transfer(_from, _to, _value, "Oxygen");
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
        assert(balanceOf[_from].Oxygen + balanceOf[_to].Oxygen == previousBalances);
    }
    /**
     * Transfer tokens
     *
     * Send `_value` tokens to `_to` from your account
     *
     * @param _to The address of the recipient
     * @param _value the amount to send
     * @param _resourceID is the resource to send
     */
    function transfer(address _to, uint256 _value, uint256 _resourceID) public {
        
        if(_resourceID == 1){
        _transferWood(msg.sender, _to, _value);
    }
     if(_resourceID == 2){
        _transferWater(msg.sender, _to, _value);
    } if(_resourceID == 3){
        _transferSoil(msg.sender, _to, _value);
    } if(_resourceID == 4){
        _transferMetal(msg.sender, _to, _value);
    }
     if(_resourceID == 5){
        _transferOxygen(msg.sender, _to, _value);
    }
    
    
    }
  

    /**
     * Set allowance for other address
     *
     * Allows `_spender` to spend no more than `_value` tokens in your behalf
     *
     * @param _spender The address authorized to spend
     * @param _value the max amount they can spend
     */
    function approve(address _spender, uint256 _value) public
        returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        return true;
    }

    /**
     * Set allowance for other address and notify
     *
     * Allows `_spender` to spend no more than `_value` tokens in your behalf, and then ping the contract about it
     *
     * @param _spender The address authorized to spend
     * @param _value the max amount they can spend
     * @param _extraData some extra information to send to the approved contract
     */
    function approveAndCall(address _spender, uint256 _value, bytes _extraData)
        public
        returns (bool success) {
        tokenRecipient spender = tokenRecipient(_spender);
        if (approve(_spender, _value)) {
            spender.receiveApproval(msg.sender, _value, this, _extraData);
            return true;
        }
    }

    function setGameContract(address _addr) onlyOwner{
        gameContract = _addr;
        
    }
    /**
     * Destroy tokens for wood only
     *
     * Remove `_value` tokens from the system irreversibly
     *
     * @param _value the amount of money to burn
     */
     function burn(address _addr,uint id, uint256 _value) returns (bool success) {
        require(msg.sender == gameContract);
        require( id > 0 && id <6);
        if(id == 1){
            require(balanceOf[msg.sender].Wood >= _value);
            balanceOf[_addr].Wood -= _value;
        }
        if(id == 2){
            require(balanceOf[msg.sender].Water >= _value);
            balanceOf[_addr].Water -= _value;
        }
        if(id == 3){
            require(balanceOf[msg.sender].Soil >= _value);
            balanceOf[_addr].Soil -= _value;
        }
        if(id == 4){
            require(balanceOf[msg.sender].Metal >= _value);
            balanceOf[_addr].Metal -= _value;
        }
        if(id == 5){
            require(balanceOf[msg.sender].Oxygen >= _value);
            balanceOf[_addr].Oxygen -= _value;
        }
        
        //totalSupply -= _value;                      // Updates totalSupply
        Burn(_addr, _value, id);
        return true;
    }

 


/** 
 * **
 * *
 * *
 * 
 * 
 * 
 * */
  function harvestResource(uint256 wood, uint256 water, uint256 soil, uint256 metal, uint256 oxygen, address _reciever){
      require(msg.sender == gameContract);
      uint _amount;
      
    balanceOf[_reciever].Wood += wood;
    balanceOf[_reciever].Water += water;
    balanceOf[_reciever].Soil += soil;
    balanceOf[_reciever].Metal += metal;
    balanceOf[_reciever].Oxygen += oxygen;
    if(wood > 0){
        _amount += wood;
    }
    if(water > 0){
        _amount += water;
    }
    if(soil > 0){
        _amount += soil;
    }
    if(metal > 0){
        _amount += metal;
    }if(oxygen > 0){
        _amount += oxygen;
    }
    
    Mint(_reciever, _amount);
    
      
      
      
  
}
}

