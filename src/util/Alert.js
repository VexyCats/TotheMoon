import Actions from './MouseActions';

var game,
 Alert = function(cgame){
   game = cgame;
}

Alert.prototype ={
  show: function(type, msg, title,closeVersion){
    var close = this.getCloseButton(type,closeVersion);

  },
  getCloseButton: function(type,version){
    //Calculate the right fram from the icons asset
    version = version>6?6:version,
    version = version<1?1:version;
    version *= 2;
    var frame = type == 'success' || type == 'info'? version - 2:version - 1;

    var close = game.add.sprite(100,100,'close_icons',frame);
    close.anchor.x = 0.5,
    close.anchor.y = 0.5;
    close.inputEnabled = true;
    close.input.useHandCursor = true;
    close.scale.x = 0.3,
    close.scale.y = 0.3;
    Actions.addHover(close);//Add hover action to the button
    return close;
  },

}

export default Alert;
