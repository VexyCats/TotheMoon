TheMoon.playingConfig = function(game){
	


function run(){
console.log("playing config active");
function drawMap() {
var tile1, tile2;
for( y = 0; y <= 1300; y++){
	for( x = 0; x <= 2100; x++){
			
		tile1 = game.rnd.integerInRange(1,3);
		
		if(tile1 == 1){
			game.add.sprite(x,y,'tileHills');
		}else if(tile1 == 2){
			game.add.sprite(x,y,'tileWater');
		}else if(tile1 == 3){
			game.add.sprite(x,y,'tileGrasslands');
		}
x = x +99;

}
y = y +99;
}

}
drawMap();

}
run();
/*
***************functions****************
*             drawMap()
*             drawMenu()
*
*
*
*
*
*/









};