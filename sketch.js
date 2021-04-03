
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world;
var tree,ground,stone;
var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5,rope;
var mangoBodyPosition,stoneBodyPosition;
function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(600,height,1200,20);

	tree=new Tree(1000,500,400,400);
	stone=new Stone(150,600,50,50);
	mango1=new Mango(1000,350,40);
	mango2=new Mango(1050,350,40);
	mango3=new Mango(1100,350,40);
	mango4=new Mango(1000,400,40);
	mango5=new Mango(1050,400,40);
     boy= createSprite(200,650,10,10);
     boy.addImage(boyImg);
	 boy.scale=0.09;
	 rope=new Elastic(stone.body,{x:150,y:600});
	Engine.run(engine);
  
}


function draw() {
  background("green");
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rope.display();
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function detectCollision(lmango,lstone){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y);
if(distance<=lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false);
}
}
