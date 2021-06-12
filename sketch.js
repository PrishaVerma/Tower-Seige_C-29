const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    poly_img=loadImage('hexa2.png');
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,390,1200,20);

//Platform for pyramid 1
    platform=new Ground(800,300,300,20);

//Platform for pyramid 2
    platform2=new Ground(500,200,240,20);

//Level one of the pyramid
    block1=new Box(680,210,40,50);
    block2=new Box(720,210,40,50);
    block3=new Box(760,210,40,50);
    block4= new Box(800,210,40,50);
    block5=new Box(840,210,40,50);
    block6=new Box(880,210,40,50);
    block7=new Box(920,210,40,50);
    
//Level two of the pyramid
    block8=new Box(720,200,40,50);
    block9=new Box(760,200,40,50);
    block10= new Box(800,200,40,50);
    block11=new Box(840,200,40,50);
    block12=new Box(880,200,40,50);

//Level three of the pyramid
    block13=new Box(760,190,40,50);
    block14=new Box(800,190,40,50);
    block15=new Box(840,190,40,50);

//Level four of the pyramid
    block16= new Box(800,160,40,50);

/* ----PYRAMID 2----*/

//Level one of the pyramid
    l2_block1=new Box(460,180,30,40);
    l2_block2=new Box(480,180,30,40);
    l2_block3=new Box(500,180,30,40);
    l2_block4=new Box(520,180,30,40);
    l2_block5=new Box(540,180,30,40);

//Level two fo the pyramid
    l2_block6=new Box(480,170,30,40);
    l2_block7=new Box(500,170,30,40);
    l2_block8=new Box(520,170,30,40);

//Level three of the pyramid
    l2_block9= new Box(500,160,30,40);

// Polygon body
    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);

   

    slingshot= new SlingShot(this.polygon,{x:100,y:200});

    

}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    platform.display();
    platform2.display();

//Displaying level one of the pyramid
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

//Displaying level two of the pyramid
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

//Displaying level three of the pyramid
    block13.display();
    block14.display();
    block15.display();

//Displaying level four of the pyramid
   block16.display();

   /* Dispalying pyramid 2*/
//Displaying level one of pyramid 2
   l2_block3.display();
   l2_block4.display();
   l2_block5.display();
   l2_block2.display();
   l2_block1.display();

//Displaying level two of pyramid 2
   l2_block6.display();
   l2_block7.display();
   l2_block8.display();

//Displaying level three of pyramid 2
   l2_block9.display();
   

   imageMode(CENTER);
  
   image(poly_img,polygon.position.x,polygon.position.y,60,60);
   slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}