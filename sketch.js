
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;

const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var rf;
var p1,p2,p3,p4,p5;
var s1,s2,s3,s4,s5;
var mConstraint;
var canvas;
var world,engine;

function setup() {
	canvas=createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let opt ={
		mouse:canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,opt);
	World.add(world,mConstraint);

	rf= new Roof(width/2-30,200,300,50);

	p1=new Pendulum(250,450,"white");
	p2=new Pendulum(310,450,"white");
	p3=new Pendulum(370,450,"white");
	p4=new Pendulum(430,450,"white");
	p5=new Pendulum(490,450,"white");

	s1=new Sling(p1.body,{x:250, y:200});
	s2=new Sling(p2.body,{x:310, y:200});
	s3=new Sling(p3.body,{x:370, y:200});
	s4=new Sling(p4.body,{x:430, y:200});
	s5=new Sling(p5.body,{x:490, y:200});

}

function draw() {
  
  background(0);
  Engine.update(engine);
  rf.display(); 

  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  
}

function mouseDragged(){
	Matter.Body.setPosition(p1.body,{x: mouseX, y: mouseY});
}



