import buildingMenuConfig from '../config/buildingMenu.js';

import Actions from '../util/MouseActions.js';
import Alert from '../util/Alert.js';

var game,
BuildingMenu = function(cgame){
  this.game = cgame;
  var errors=[];
  //this.show();//Set the position in the world relative to other components
  //this.hide();


}

BuildingMenu.prototype = {
    show: function(){
      this.getBackground();
      this.getTitle();
      this.getOptions();

    },
    hide: function(){
      this.buildMenuGroup.kill()
    },
    fetchGroup: function(){
      this.buildMenuGroup = this.buildMenuGroup || this.game.add.group()
      return this.buildMenuGroup;
    },
    getBackground: function(){
      var group = this.fetchGroup(),
      y = (this.game.camera.height - buildingMenuConfig.height)/2;

      if(this.background)
        return this.background;

      var background = this.game.add.graphics(0,0);
      background.beginFill(buildingMenuConfig.background.fillColor,0.75);
      background.lineStyle(2, buildingMenuConfig.background.lineColor, 0.75);
      background.drawRect(buildingMenuConfig.x, y, buildingMenuConfig.width, buildingMenuConfig.height);
      this.background =  background;
      this.buildMenuGroup.add(this.background);
      this.background.inputEnabled = true;

      return this.background;
    },
    getTitle: function(){
      if(this.title)
        return this.title;

      var title = this.game.add.text(buildingMenuConfig.positions.title.x,buildingMenuConfig.positions.title.y,buildingMenuConfig.content.title,buildingMenuConfig.styles.title);

      this.title = title;
      this.buildMenuGroup.add(this.title);

      return this.title;
    },
    getOptions: function(){
      if(this.options)
        return this.options;

      var options = [];

      this.options = [];
      for(var i in buildingMenuConfig.menuList){
      var menu = this.game.add.text(buildingMenuConfig.positions.options[i].x,buildingMenuConfig.positions.options[i].y,buildingMenuConfig.menuList[i],buildingMenuConfig.styles.options);
      menu.inputEnabled = true;
      menu.input.useHandCursor = true;
      Actions.addHover(menu);
      options.push(menu);
      this.buildMenuGroup.add(menu);
      }

      this.options = options
      return this.options;
    }

}


export default BuildingMenu;
