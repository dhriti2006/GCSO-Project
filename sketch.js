var car, wall;


var speed,weight;


function setup() {
  createCanvas(800,400);

  speed = random(10,100);
  weight= random(400,1500);

  car = createSprite(50,200,50,50);

  car.velocityX = speed;
  car.shapeColor=color(255);

  wall = createSprite(700,200,60,height/2);
  wall.shapeColor=color(80,80,80);



  
}

function draw() {
  background(0);  

  if(keyDown("space")){
    car.x=50;
    car.y=200;
    speed=random(10,100)
    car.velocityX=speed;

  }

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car.shapeColor=color("blue");
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color("red");
    }

    if(deformation<100){
      car.shapeColor=color("pink");
    }
    
    text("deformation:"+Math.round(deformation),500,50)


    text("speed:"+Math.round(speed),500,70)
    

    text("weight:"+Math.round(weight),500,90)
    
  }
  drawSprites();
}