
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const render = matter.render;

function preload()
{
	
}

function setup() {
	createCanvas(900, 560);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Roof(350,100,300,30);
  World.add(world,box)

	bobObject1 = new Ball(250,300);
	bobObject2 = new Ball(300,300);
	bobObject3 = new Ball(350,300);
	bobObject4 = new Ball(400,300);
	bobObject5 = new Ball(450,300);
	ground = new Ground(600,height,1200,20);

	rope1 = new Rope(bobObject1.body,roof.body,-100,0);
  rope2 = new Rope(bobObject2.body,roof.body,-50,0);
  rope3 = new Rope(bobObject3.body,roof.body,0,0);
  rope4 = new Rope(bobObject4.body,roof.body,+50,0);
  rope5 = new Rope(bobObject5.body,roof.body,+100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  text(mouseX+"  :  "+mouseY,100,50);
  
  drawSprites();
  //box1.display();
  roof.display();
  //box3.display();
  ground.display();
  //rope.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}
//function mouseDragged(){
 //   Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
//}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
	 }
   }