var pc;
var walls;
var wallImg;
var walkImg;
var stand;
var ob1Img;
var ob2Img;
var ob3Img;
var ob4Img;
var ob5Img;
var ob6Img;
var ob7Img;


var ob1;
var ob2;
var ob3;
var ob4;
var ob5;
var ob6;
var ob7;
var  obstacleGroup;
var  dGroup;
var rewardArray =[];
var life=3;
var gameState;
var speedUpReward =0;
var pcvelocityX =4;
var pcvelocityY =4;


function preload(){
  walkImg= loadAnimation('images/walk1.png',"images/walk2.png",'images/walk3.png','images/walk4.png');
  stand =loadImage('images/main.png')

    ob1Img=loadImage('images/object-1.jpg')
    ob2Img=loadImage('images/object-2.jpg')
    ob3Img=loadImage('images/object-3.jpg')
    ob4Img=loadImage('images/object-4.jpg')
    ob5Img=loadImage('images/object-5.jpg')
    ob6Img=loadImage('images/object-6.jpg')
    ob7Img=loadImage('images/object-7.jpg')
}


function setup() {

    createCanvas(windowWidth,windowHeight);
    // Player
    pc = createSprite(width/2,height/1.15,10,10);
    pc.addImage("stand",stand)
    pc.addAnimation("walk",walkImg)
    // pc.scale=0.2
    walls = new  Group();
    obstacleGroup = new Group();
    dGroup =new Group();

    // Obstacles

    ob1 = createSprite(width/2,height/2,10,10);
    ob1.addImage(ob1Img)
    ob1.scale=0.3;

    ob2 = createSprite(width/23,height/3,10,10);
    ob2.addImage(ob2Img);
    ob2.scale=0.2;

    ob3 = createSprite(1046 ,505,10,10);
    ob3.addImage(ob3Img);
    ob3.scale = 0.5;

    ob4 = createSprite(550,449,10,10);
    ob4.addImage(ob4Img);
    ob4.scale = 0.5;

    ob5 = createSprite(347,568,10,10);
    ob5.addImage(ob5Img);
    ob5.scale = 0.5;

    ob6 = createSprite(401,192,10,10);
    ob6.addImage(ob7Img);    
    ob6.scale=0.5;

    ob7 = createSprite(274,374,10,10);
    
    obstacleGroup.add(ob1)
    obstacleGroup.add(ob2)
    obstacleGroup.add(ob3)
    obstacleGroup.add(ob4)
    obstacleGroup.add(ob5)
    obstacleGroup.add(ob6)
    obstacleGroup.add(ob7)

    console.log("check")

    createDangerousMovement();
    

  }
  
  function draw() {
    background(220);

    if(dGroup.isTouching(pc)) {
      life--
      pc.x=pc.x-20;
      pc.y=pc.y-20;
    }
    // if(life == 0) {

    // }

    createWalls();
    Life();
    pc.collide(obstacleGroup);
    dGroup.bounceOff(walls);
    dGroup.bounceOff(obstacleGroup);
    createReward();
    drawSprites();
 
  }
  // function keyPressed(){
  //     if(keyCode ==38){
  //       pc.y-=15;
  //       pc.changeAnimation("walk")
        
  //     }
  //     if(keyCode ==40){
  //       pc.y+=10;
  //     }



  // }

  function createWalls(){
      var Topwall =createSprite(width/2,0,width,10);
      var Bottomwall =createSprite(width/2,windowHeight,width,10);
      var Leftwall =createSprite(0,width/2,10,width);
      var Rightwall =createSprite(width,width/2,10,width);
      
     


      walls.add(Topwall);
      walls.add(Bottomwall);
      walls.add(Leftwall);
      walls.add(Rightwall);
  }

  
  function mouseClicked(){  console.log("mouse"+mouseY);
   console.log("mouse"+mouseX); 
   var xOffset = (pc.x - mouseX);
    var yOffset = (pc.y - mouseY);
     if(abs(xOffset) > abs(yOffset)){
        if(pc.x > mouseX){
           pc.velocityX =-getPcvelocityX();
            pc.velocityY =0;
             pc.rotation=180+90;
              pc.changeAnimation("walk") }
              else{ pc.velocityX=4;
                 pc.velocityY =0;
                  pc.rotation = 90;
                   pc.changeAnimation("walk") }
                   }else{ if(pc.y > mouseY){
                     pc.velocityY=-4;
                      pc.velocityX =0;
                      pc.rotation=0;
                      pc.changeAnimation("walk")
                     }else{ pc.velocityY=4;
                       pc.rotation=180;
                        pc.velocityX =0;
                         pc.changeAnimation("walk") } } }
  


  function createDangerousMovement(){
    for(var i=1; i<=4;i++){
      var dobs = createSprite(15,15,10,10);
      dobs.x = random(10,width-10);
      dobs.y = random(10,height-10);
      
      dobs.velocityX =random(3,4);
      dobs.velocityY =random(3,4);

      dGroup.add(dobs);
      
    }

   
    
  }

  function createReward(){
    var reward=createSprite(260,400,10,10);
    var reward1=createSprite(280,20,10,10);
    var reward2=createSprite(250,256,10,10);
    var reward3=createSprite(125,width/4,10,10);
    var reward4=createSprite(15,36,10,10);
    var reward5=createSprite(80,10,10,10);
    var reward6=createSprite(50,90,10,10);
   
    reward.shapeColor = 'red';
    reward1.shapeColor = 'red';
    reward2.shapeColor = 'red';
    reward3.shapeColor = 'red';
    reward4.shapeColor = 'red';
    reward5.shapeColor = 'red';
    reward6.shapeColor = 'red';

    rewardArray.push(reward1,reward2,reward3,reward4,reward5,reward6);

   
  }


  function Life(){
    text("Life:"+life,20,110);
  }

  function getPcvelocityX(){
    return  pcvelocityX+speedUpReward;
  }

  function getPcvelocityY(){
    return  pcvelocityX+speedUpReward;
  }
  // window.addEventListener('mousemove',function(e){
  //       console.log(`x:${e.x} | y: ${e.y}`)
  // })