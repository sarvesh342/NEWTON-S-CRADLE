
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof,string1,string2,string3,string4,string5;
//function preload()
///{
	
//}

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobObject1 = new Bob(300,500,25);
  bobObject2 = new Bob(350,500,25);
  bobObject3 = new Bob(400,500,25);
  bobObject4 = new Bob(450,500,25);
  bobObject5 = new Bob(500,500,25);
  string1 = new Rope(bobObject1.body,{x:300,y:100});
  string2 = new Rope(bobObject2.body,{x:350,y:100});
  string3 = new Rope(bobObject3.body,{x:400,y:100});
  string4 = new Rope(bobObject4.body,{x:450,y:100});
  string5 = new Rope(bobObject5.body,{x:500,y:100});
  roof = new Roof(400,100,400,10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();
   string1.display();
   string2.display();
   string3.display();
   string4.display();
   string5.display();
   roof.display();
 
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:250});
  }
}
