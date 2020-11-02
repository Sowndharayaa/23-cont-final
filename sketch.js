var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,backgroundImg, backgroundd;
var bottom,leftside,rightside;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundImg = loadImage ("Sky.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	backgroundd = createSprite (400,350);
	backgroundd.addImage (backgroundImg)

	rightside = createSprite (500, 630,20,100,{isStatic:true});
	rightside.shapeColor ="red";

	leftside = createSprite (300,630,20,100,{isStatic:true});
	leftside.shapeColor = "red";

	bottom = createSprite (400,660,200,20 ,{isStatic:true});
	bottom.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
    bottom = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, bottom);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("green");
  rect(bottom.position.x,bottom.position.y,20,200)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
   
    
  }
}



