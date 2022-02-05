var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;
var zombieGroup;
var  bullets=100;
var heart1,heart2,heart3;
var heart1Img,heart2Img,heart3Img;
var bulletsGroup;

function preload(){
heart1Img=loadImage("assets/heart_1.png")  
heart2Img=loadImage("assets/heart_2.png")  
heart3Img=loadImage("assets/heart_3.png")  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg=loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
bg=createSprite(displayWidth/2-20,displayHeight/2-40,60,60);
bg.addImage(bgImg);
  

//creating the player sprite
player=createSprite(displayWidth-1200,displayHeight-300,60,60);
player.addImage(shooterImg);
player.scale=0.3;

heart1=createSprite(displayWidth-200,50,20,20);
heart1.addImage(heart1Img);
heart1.scale=0.5;
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")){
player.y=player.y-20;  
}

if(keyDown("DOWN_ARROW")){
  player.y=player.y+20;  
  }
//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  player.addImage(shooter_shooting);
}
//player goes back to original standing image once we stop pressing the space bar
if(keyWentUp("space")){
  player.addImage(shooterImg);
}

if(keyWentDown("space")){
  bullets=createSprite(displayWidth-1150,player.y-30,20,10);
  bullets.velocityX=20;

}
enemy();
drawSprites();

}
function enemy(){
  if(frameCount%50===0){
    zombie=createSprite(random(500,1100),random(100,500),40,40);
    zombie.addImage(zombieImg);
    zombie.velocityX=-3;
    zombie.scale=0.15
    zombieGroup.add(zombie);

  }
}
