var roof1,rope,ball1,ball2,ball3,ball4,ball5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roof1 = new roof(400,100,300,20);
	ball1 = new ball(300,300)
	ball2 = new ball(350,300);
	ball3 = new ball(400,300);
	ball4 = new ball(450,300);
	ball5 = new ball(500,300);
	rope1 = new Rope(ball1.body,{x:300,y:100});
	rope2 = new Rope(ball2.body,{x:350,y:100});
	rope3 = new Rope(ball3.body,{x:400,y:100});
	rope4 = new Rope(ball4.body,{x:450,y:100});
	rope5 = new Rope(ball5.body,{x:500,y:100});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
 rope3 .display();
 rope4.display();
rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-130,y:130})
	}
}


