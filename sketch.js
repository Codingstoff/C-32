const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg;
var platform 
var slingshot
var score = 0
var gameState = "onSling"

function preload() {
    
    getBackgroundimg()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(100,305,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    bird = new Bird(195,100);
    slingshot = new Slingshot(bird.body,{x:230,y:100});

    

    
}

function draw(){
   if (backgroundImg)
   background(backgroundImg)
   else
   background("black")
   

    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    slingshot.display();
    

    bird.display();
    textSize(20)
    text("Score "+score,50,50)
}



function mouseDragged() 
{
    if(gameState==="onSling")
    {
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }


}

function mouseReleased() 
{
  slingshot.fly()
  gameState = "Launched"
}

function keyPressed()
{
    if(keyCode === 32)
    {
        //slingshot.attach(bird.body)

    }
}


async function getBackgroundimg()
{
    var response = await fetch ("http://worldclockapi.com/api/json/est/now")
    var responsejson = await response.json() 
    var currDt = responsejson.currentDateTime;
    var hour = currDt.slice(11,13)
    console.log(hour)
    if (hour > 8 && hour < 15)
    {
        backgroundImg = loadImage("sprites/bg.png");
    }
    else
      backgroundImg = loadImage("sprites/bg2.jpg");
    
}

