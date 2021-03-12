
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree; 
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var stoneimg;
var treeimg;
var groundimg;
var boyimg;
var constraint1;

function preload()
{
  stoneimg = loadImage("images/stone.png");
  treeimg = loadImage("images/tree.png");	
  boyimg = loadImage("images/boy.png");
  //groundimg = loadImage("images/ground.png");	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	tree = new treeClass( 600,400,300,400);
	boy = new boyClass(150,550,100,150);
  ground = new groundClass(400,600,800,20);

  stone = new stoneClass(mouseX,mouseY,40,40);
  
  mango1 = new mangoClass(500,400,40,40);
  mango2 = new mangoClass(550,350,40,40);
  mango3 = new mangoClass(600,300,40,40);
  mango4 = new mangoClass(600,400,40,40);
  mango5 = new mangoClass(550,400,40,40);

  constraint1 = new constraintClass(boy.body,stone.body);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  boy.display();
  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  constraint1.display();

  drawSprites();
 
}



