/* stores all player data to be pulled/saved/sent to blockchain */
import Building from '../components/Building';


var Player = function (config){
  this.screenName = config.screenName;
}


Player.prototype = {
    instance: {},
    screenName: 'Player',
    playerLevel: 1,
    lastResourceGathering: 0,
    buildings : [],
    inventoryItems: [0,0,0,50,0,0,0]

}


export default Player;
