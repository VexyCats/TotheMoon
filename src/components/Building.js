var game,
Building = function(cgame,config){
  this.game = cgame;
  config = config || {};

  for(var i in this.requiredConfig){
    if( typeof config[this.requiredConfig[i]] == 'undefined' || config[this.requiredConfig[i]] == '' )
      '';
      //return false;
  }

  this.state = Object.assign({},this.state,config);
  console.log(this.state)
  this.show();
}

Building.prototype = {
  state:{
    x:0,
    y:0,
    sprite: '',//Frame to use in building sprites
    frameName: '',
    maxStorage:0,
    resource:'',
    storage:0

  },
  requiredConfig:["x","y","resource","maxStorage","sprite"],
  show: function(game){
    console.log(this.state)
    var unit =  this.game.sprite.add(this.state.x,this.state.y,this.state.sprite,this.state.frameName);
    this.phaser = unit;
  },
  hide: function(){
    this.phaser.kill();
  }


}


export default Building;
