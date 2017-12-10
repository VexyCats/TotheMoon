pragma solidity ^0.4.3;
pragma solidity ^0.4.16;

interface tokenRecipient { function receiveApproval(address _from, uint256 _value, address _token, bytes _extraData) public; }

contract TokenERC20 {
    // Public variables of the token
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    // 18 decimals is the strongly suggested default, avoid changing it
    uint256 public totalSupply;

    // This creates an array with all balances
    mapping (address =>  mapping( uint256 => uint256) ) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    // This generates a public event on the blockchain that will notify clients
    event Transfer(address indexed from, address indexed to, uint256 value, uint256 resource_index);

    // This notifies clients about the amount burnt
    event Burn(address indexed from, uint256 value, uint256 resource_index);

    /**
     * Constrctor function
     *
     * Initializes contract with initial supply tokens to the creator of the contract
     */
    function TokenERC20(
        uint256 initialSupply,
        string tokenName,
        uint256 resource_index,
        string tokenSymbol
    ) public {
        totalSupply = initialSupply * 10 ** uint256(decimals);  // Update total supply with the decimal amount
        balanceOf[msg.sender][resource_index] = totalSupply;                // Give the creator all initial tokens
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                               // Set the symbol for display purposes
    }

    /**
     * Internal transfer, only can be called by this contract
     */
    function _transfer(address _from, address _to, uint _value, uint _resource_index) internal {
        // Prevent transfer to 0x0 address. Use burn() instead
        require(_to != 0x0);
        // Check if the sender has enough
        require(balanceOf[_from][_resource_index] >= _value);
        // Check for overflows
        require(balanceOf[_to][_resource_index] + _value > balanceOf[_to][_resource_index]);
        // Save this for an assertion in the future
        uint previousBalances = balanceOf[_from][_resource_index] + balanceOf[_to][_resource_index];
        // Subtract from the sender
        balanceOf[_from][_resource_index] -= _value;
        // Add the same to the recipient
        balanceOf[_to][_resource_index] += _value;
        Transfer(_from, _to, _value, _resource_index);
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
        assert(balanceOf[_from][_resource_index] + balanceOf[_to][_resource_index] == previousBalances);
    }

    /**
     * Transfer tokens
     *
     * Send `_value` tokens to `_to` from your account
     *
     * @param _to The address of the recipient
     * @param _value the amount to send
     */
    function transfer(address _to, uint256 _value, uint256 _resource_index) public {
        _transfer(msg.sender, _to, _value, _resource_index);
    }

    /**
     * Transfer tokens from other address
     *
     * Send `_value` tokens to `_to` in behalf of `_from`
     *
     * @param _from The address of the sender
     * @param _to The address of the recipient
     * @param _value the amount to send
     */
    function transferFrom(address _from, address _to, uint256 _value, uint256 _resource_index) public returns (bool success) {
        require(_value <= allowance[_from][msg.sender]);     // Check allowance
        allowance[_from][msg.sender] -= _value;
        _transfer(_from, _to, _value, _resource_index);
        return true;
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

    /**
     * Destroy tokens
     *
     * Remove `_value` tokens from the system irreversibly
     *
     * @param _value the amount of money to burn
     */
    function burn(uint256 _value, uint256 _resource_index) public returns (bool success) {
        require(balanceOf[msg.sender][_resource_index] >= _value);   // Check if the sender has enough
        balanceOf[msg.sender][_resource_index] -= _value;            // Subtract from the sender
        totalSupply -= _value;                      // Updates totalSupply
        Burn(msg.sender, _value, _resource_index);
        return true;
    }


/** Create new resources as ERC20 tokens, need to call default again, but only for owner
 * **
 * *
 * *
 * 
 * 
 * 
 * */
  function createResource(uint256 _amount)
  
}






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
