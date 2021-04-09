var  database;
var form,game,player;
var gameState=0;
var playerCount;
var canvas;
var allplayers,distance=0
var car1img, car2img, car3img, car4img, trackimg, groundimg
var cars, car1,car2, car3,car4;
var yval;
var xval;
var xPos;
function preload()
{
   car1img=loadImage("images/car1.png");
   car2img=loadImage("images/car2.png");
   car3img=loadImage("images/car3.png");
   car4img=loadImage("images/car4.png");
   trackimg=loadImage("images/track.jpg");
   groundimg=loadImage("images/ground.png");
}

function setup(){
  database = firebase.database();

 createCanvas(displayWidth,displayHeight);
xval=0;
yval=0;
game= new Game();
game.getstate();
game.start();

}

function draw(){

  if (playerCount===4)
  {
    game.update(1);
    
  }
  if(gameState===1)
    {
     clear();
     game.play();
    }
 if(gameState===2)
 {
  game.end();
 }
 
 
  //console.log(playerCount);
  //console.log(gamestate);
}
