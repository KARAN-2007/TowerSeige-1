const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;

var slingShot;
var polygon;
function preload(){
  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(490,300,250,10);
  stand2 = new Stand(800,200,200,10);
 
  //level one
  block1 = new Block(400,275,30,40);
  console.log(block1);
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  //level two
  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  //level three
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  //top
  block16 = new Block(490,155,30,40);
  polygon = new Polygon(200,50,40,40)
  slingShot=new Sling(polygon.body,{x:200,y:300})
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  polygon.display();
  slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY})
}
function mouseReleased(){
 slingShot.fly()
}
