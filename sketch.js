
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground, bktLeft, bktRight;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	Engine.run(engine);
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.1,
		friction: 0.2,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(width/5, height/6, 15, ball_options);
	World.add(world, ball);
	
	ground = new Ground(width-width, height-20, width, 20);
	bktLeft = new Ground(0.55 * width, height-150, 15, 130);
	bktRight = new Ground(0.75 * width, height-150, 15, 130);
}


function draw() {
	background(0);
	Engine.update(engine);
	ground.display();
	bktLeft.display();
	bktRight.display();

	ellipseMode(RADIUS);
	  fill("white");
	strokeWeight(0);
	ellipse(ball.position.x, ball.position.y, 15, 15);

	
	
	

	
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Body.applyForce(ball, ball.position, {x:20, y:-35} );
}
}

