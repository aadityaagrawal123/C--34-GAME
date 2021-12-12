
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var engine, world, backgroundImg;
var boat, boatImg, helicopter, helicopterImg; 
var ground;
var rope, rope2; 




function preload (){
  backgroundImg = loadAnimation("background.gif");
  boatImg = loadAnimation("boat.gif");
  helicopterImg = loadAnimation("helicopter.gif");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;   

  boat = createSprite(width/2, height/1.2, 100, 100);
  boat.addAnimation(boatImg);
  boat.scale = 0.65; 

  helicopter = createSprite(width/2, height/17, 100, 80);
  helicopter.addAnimation(helicopterImg);
  helicopter.scale = 1.65;
}


function draw() 
{
  background(51);

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  if (keyCode === RIGHT_ARROW && helicopter.x < width-155) {
    helicopter.position.x = helicopter.position.x +5;
  }
  if (keyCode === LEFT_ARROW && helicopter.x > 150) {
    helicopter.x = helicopter.x -5;
  }

  drawSprites();

}

