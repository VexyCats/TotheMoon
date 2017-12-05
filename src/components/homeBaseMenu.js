import{HomeBaseMenuSprite} from '../config/homeBaseMenu';
var HomeBaseMenu = function(cgame, player,config){
  this.game = cgame;
  this.player = player;
  config = config || {};
  var errors=[];



}

HomeBaseMenu.prototype = {
  state:{
    	sprite:'HomeBaseMenu',
      //x: this.game.camera.world.centerX,
      //y: this.game.camera.world.centerY

    },

    show: function(){
    	this.buildingsMenu();
    },

    hide: function(){
      this.menuGroup.kill();
    },
    buildingsMenu: function(){
    	if(this.menuGroup )this.menuGroup.revive();
			this.menuGroup = this.menuGroup || this.game.add.group();

			var menu;
			menu = this.game.add.sprite(this.game.camera.world.centerX, this.game.camera.world.centerY, 'homeBaseMenu', this);
			this.menuGroup.add(menu);
			var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
			position = {x: menu.x,y: menu.y};

			var menu1 = this.game.add.text(position.x+20, position.y+25, this.player.playerLevel, style);
			position.y += 25;
			var menu2 = this.game.add.text(position.x+20, position.y+40, this.player.screenName, style);
			var menu3 = this.game.add.text(position.x+20, position.y+100, "Current Buildings", style);
			var menu4 = this.game.add.text(position.x+150, position.y+150, this.player.buildings[0], style);
			this.menuGroup.add(menu1);
			this.menuGroup.add(menu2);
			this.menuGroup.add(menu3);
			this.menuGroup.add(menu4);
			console.log(this.menuGroup);

			menu.inputEnabled = true;
      console.log(this.menuGroup)
			menu.events.onInputOut.add(this.hide, this);


    }

  }

  export default HomeBaseMenu;
