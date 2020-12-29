var thikness ,wall;
var bullet,weight,speed;

function setup() {
   createCanvas(1600,400);
   bullet =  createSprite(200,200,50,50);
     wall = createSprite(1200,200,thikness,height/2);
     thikness =random(22,83);
     speed = random(223.321);
     weight= random(30,52);
     bullet.velocityX = speed;
}

function draw() {
  background("black");
 if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed *speed/(thikness *thikness *thikness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);

    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
 }
  
  
  drawSprites();
   
}
