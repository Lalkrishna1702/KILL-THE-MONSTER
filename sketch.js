const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  Background = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  hero = new Hero(200,500,400,300);

  monster = new Monster(1100,600,400,300);

  ground1 = new Ground(750,700,300,10);
  ground2 = new Ground(1100,700,1,10)

  fly = new Fly(hero.body,{x:250,y:100});

  //layer 1
  block1 = new Block(650,650,75,75);
  block2 = new Block(650,580,75,75);
  block3 = new Block(650,500,75,75);
  block4 = new Block(650,420,75,75);
  block5 = new Block(650,330,75,75);
  block6 = new Block(650,250,75,75);

  //layer2

  block7 = new Block(750,650,75,75);
  block8 = new Block(750,580,75,75);
  block9 = new Block(750,500,75,75);
  block10 = new Block(750,420,75,75);
  block11= new Block(750,330,75,75);
  block12= new Block(750,250,75,75);
  block13 = new Block(750,180,75,75);
  block14= new Block(750,100,75,75);
  block15= new Block(750,20,75,75);

  //layer 3

  block16 = new Block(850,650,75,75);
  block17 = new Block(850,580,75,75);
  block18 = new Block(850,500,75,75);
  block19 = new Block(850,420,75,75);
  block20 = new Block(850,330,75,75);
  block21 = new Block(850,250,75,75);


}

function draw() {
  background(Background);
  Engine.update(engine);
  hero.display();
  //fly.display();
  ground1.display();
  //ground2.display();
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
  monster.display();
  mouseDragged();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}