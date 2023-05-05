const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

score = 0;

function preload(){
  bg_img = loadImage("background.png");
  hoop = loadImage("hoop.jpg");
  ballImg = loadImage("basketball.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    isStatic: false,
    restitution: 0.8,
    friction: 0.02
  };

  ball = Matter.Bodies.circle(windowWidth/2 - 110,400,70,ball_options);
	World.add(world,ball);

  var ground_options = {
    isStatic: true
  }

  ground = Matter.Bodies.rectangle(0,windowHeight,windowWidth,20,ground_options);
  World.add(world,ground);

  button = createButton("Reset");
  button.position(windowWidth - 350,50)
  button.mousePressed(mouseClicked);

  button2 = createButton("Score: " + score);
  button2.position(100,50)
  if(ballImg){
    score += 2;
  }
}
    
function draw() {
  background(51);
  image(bg_img,0,0,width,height);
  image(hoop,windowWidth/2 - 110,150,200,200);
  image(ballImg,ball.position.x,ball.position.y,70,70);
  rect(ground.position.x,ground.position.y,windowWidth,20);

  Engine.update(engine);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    ball.position.x -= 3
  }

  if(keyCode === RIGHT_ARROW){
    ball.position.x += 3
  }

  if(keyCode === DOWN_ARROW){
    ball.position.y -= 5
  }
}

function mouseClicked(){
  window.location.reload();
}