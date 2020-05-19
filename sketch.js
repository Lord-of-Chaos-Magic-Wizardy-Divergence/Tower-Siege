const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,
block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;

var chain1, playerStone, ground, tower, towerIMG;

function preload(){
  towerIMG = loadImage("tower.png");
}

function setup() {
  createCanvas(1900,950);
  engine = Engine.create();
  world = engine.world;

  block1 = new Box(300,900,50,50,0,255,false);
  block2 = new Box(350,900,50,50,0,255,false);
  block3 = new Box(400,900,50,50,0,255,false);
  block4 = new Box(450,900,50,50,0,255,false);
  block5 = new Box(500,900,50,50,0,255,false);
  block6 = new Box(325,850,50,50,0,255,false);
  block7 = new Box(375,850,50,50,0,255,false);
  block8 = new Box(425,850,50,50,0,255,false);
  block9 = new Box(475,850,50,50,0,255,false);
  block10 = new Box(350,800,50,50,0,255,false);
  block11 = new Box(400,800,50,50,0,255,false);
  block12 = new Box(450,800,50,50,0,255,false);
  block13 = new Box(375,750,50,50,0,255,false);
  block14 = new Box(425,750,50,50,0,255,false);
  block15 = new Box(400,700,50,50,0,255,false);

  block16 = new Box(1600,900,50,50,255,0,false);
  block17 = new Box(1550,900,50,50,255,0,false);
  block18 = new Box(1500,900,50,50,255,0,false);
  block19 = new Box(1450,900,50,50,255,0,false);
  block20 = new Box(1650,900,50,50,255,0,false);
  block21 = new Box(1625,850,50,50,255,0,false);
  block22 = new Box(1575,850,50,50,255,0,false);
  block23 = new Box(1525,850,50,50,255,0,false);
  block24 = new Box(1475,850,50,50,255,0,false);
  block25 = new Box(1600,800,50,50,255,0,false);
  block26 = new Box(1550,800,50,50,255,0,false);
  block27 = new Box(1500,800,50,50,255,0,false);
  block28 = new Box(1575,750,50,50,255,0,false);
  block29 = new Box(1525,750,50,50,255,0,false);
  block30 = new Box(1550,700,50,50,255,0,false);

  ground = new Box(950,950,1900,30,255,200,true);

  playerStone = new Box(950,220,75,75,255,255,false);
  chain1 = new Chain(playerStone.body,{x:950,y:200});

  tower = createSprite(950,475);
  tower.addImage("back",towerIMG);
  tower.scale = 5.5;
}

function draw() {
  Engine.update(engine);
  background(0);
  drawSprites();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  ground.display();

  playerStone.display();
  chain1.display();

  if(keyDown("space")){
    playerStone.body.position.x = 950;
    playerStone.body.position.y = 220;
    chain1.attach(playerStone.body);
  }
}

function mouseDragged(){
  chain1.check();
}

function mouseReleased(){
  chain1.fly();
}