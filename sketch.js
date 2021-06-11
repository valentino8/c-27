
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof1, roof2, roof3, roof4;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(320,575,40);
	bob2 = new Bob(360,575,40)
	bob3 = new Bob(400,575,40)
	bob4 = new Bob (440,575,40)
	bob5 = new Bob(480,575,40)

	// roof1 = new Roof(600,700,1200,50);
	// roof2 = new Roof(10,354,50,640);
	// roof3 = new Roof(790,354,50,640);
	// roof4 = new Roof(600,10,1200,50);
	roof = new Roof(400,250,400,40);

	rope1 = new Rope(bob1.body,roof.body,-35 * 4.5,0);
	rope2 = new Rope(bob2.body,roof.body,-35 * 2.4,0);
	rope3 = new Rope(bob3.body,roof.body,-35 * 0,0);
	rope4 = new Rope(bob4.body,roof.body,-35 * -2.4,0);
	rope5 = new Rope(bob5.body,roof.body,-35 * -4.5,0)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
//   roof1.display();
//   roof2.display();
//   roof3.display();
//   roof4.display();
  roof.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === 38){
		Matter.Body.applyForce(bob5.body,bob5.body.position ,{x: 85, y: 85});
	}
}



