const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var melonImage, ropeImage, basketImage, backgroundImage
var melon, rope, basket
var ground

function preload(){
  melonImage = loadImage("melon.png")
  ropeImage = loadImage("rope.png")
  basketImage = loadImage("basket.png")
  backgroundImage = loadImage("background.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground()
  basket = new Basket(400, 300, 150, 150)
  fruit = new Fruit(200, 300, 100, 100)
  rope = new Slingshot(fruit.body, {x: 50, y: 60})
}
function draw() {
  background(backgroundImage); 
  ground.display()
  basket.display()
  fruit.display()
  rope.display()
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(fruit.body, {x: mouseX, y: mouseY})
}
function mouseReleased(){
  rope.fly()
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    rope.attach(fruit.body)
  }
  
}
