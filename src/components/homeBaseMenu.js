import{HomeBaseMenuSprite} from '../config/homeBaseMenu';
var HomeBaseMenu = function(cgame,config){
  this.game = cgame;
  config = config || {};
  var errors=[];



}

HomeBaseMenu.prototype = {
  state:{
  	sprite:'HomeBaseMenu',
    x: 'game.camera.world.centerX',
    y: 'game.camera.world.centerY'
  
    },

    show: function(){

    	buildingsMenu();

    },

    hide: function(){


    },


    buildingsMenu: function(){
			this.menuGroup = this.menuGroup || this.game.add.group();

			var menu;
			menu = game.add.sprite(game.camera.world.centerX, game.camera.world.centerY, 'homeBaseMenu', this);
			this.menuGroup.add(menu);
			var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
			position = {x: menu.x,y: menu.y};
			
			var menu1 = game.add.text(position.x+20, position.y+25, this.player.playerLevel, style);
			position.y += 25;
			var menu2 = game.add.text(position.x+20, position.y+40, this.player.screenName, style);
			var menu3 = game.add.text(position.x+20, position.y+100, "Current Buildings", style);
			var menu4 = game.add.text(position.x+150, position.y+150, this.player.buildings[0], style);
			this.menuGroup.add(menu1);
			this.menuGroup.add(menu2);
			this.menuGroup.add(menu3);
			console.log(this.menuGroup);
			//this.instance = menu;


		this.menuGroup.inputEnabled = true;
		
		



