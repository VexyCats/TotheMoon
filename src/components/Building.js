var game,
Building = function(cgame,config){
  this.game = cgame;
  config = config || {};
  var errors=[];

  if(typeof cgame == 'undefined'){
    console.error('Game required');
    return false;
  }

  for(var i in this.requiredConfig){
    if( typeof config[this.requiredConfig[i]] == 'undefined' || config[this.requiredConfig[i]] == '' )
      errors.push('Required config: '+ this.requiredConfig[i]);
  }

  if(errors.length > 0){
    console.error(errors.join(', ') );
    return false
  }

  this.state = Object.assign({},this.state,config);
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
    storage:0,
    mats: [0,0,50]

  },
  requiredConfig:["x","y","resource","maxStorage","sprite"],
  show: function(){
    var unit =  this.game.add.sprite(this.state.x,this.state.y,this.state.sprite);
    this.instance = unit;
  },
  hide: function(){
    this.phaser.kill();
  }


}


export default Building;
