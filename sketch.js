
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1500,height,3200,50)
	paper = new Paper(200,450,40)
	bin1 = createSprite(1000,600,20,150)
	World.add(world,this.bin1);
	bin2 = createSprite(1400,600,20,150)
	World.add(world,this.bin2);
	bin3 = createSprite(1200,650,400,20)
	World.add(world,this.bin3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


