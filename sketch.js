var ball , ballImg
var  backgroundImg
var candygroup , candy1 , candy2 , candy3
var board , boardImg
var score = 0


function preload(){

 ballImg = loadImage("gameball.png")
 candy1=loadImage("popcandy.png")
 candy2=loadImage("spicandy.png")
 candy3=loadImage("xmascandy.png")
 //boardImg=loadImage("board1.png")
 backgroundImg=loadImage("background.png")

}

function setup(){
  createCanvas(displayWidth-30,displayHeight-10)
  sky = createSprite(0,0,displayWidth-30,displayHeight-10)
  sky.addImage(backgroundImg)
  ball = createSprite(displayWidth/2 -180, displayHeight-100,
    displayWidth/10 , displayHeight-50)
  ball.addImage(ballImg)
  ball.setCollider("circle",0,0,30)
 // ball.debug=true
  board = createSprite(displayWidth/2-100, displayHeight/2+100,
displayWidth+8000,1000)
board.shapeColor = "yellow"

 candygroup= new Group()
  //board.addImage(boardImg)
sky.scale=1.2
ball.scale=0.1
board.scale=0.1

}

function draw (){
  //board.velocityX=-5
  
  if (board.x < 0){
    board.x=displayWidth/2
  }
  if (keyDown("space")){
   ball.velocityY=-5  }


  
    for(var i = 0;i<candygroup.length;i++){
      if (candygroup.get(i).isTouching(ball)){
        candygroup.get(i).destroy()
        ball.x =displayWidth/2 -180 
    ball.y = displayHeight-100
    score=score+5
    ball.velocityY=0
    }
    if (ball.y<0){
      ball.x =displayWidth/2 -180 
    ball.y = displayHeight-100
    ball.velocityY=0
    }
  }
   
spawnobstacles()
  drawSprites()
  textSize(30)
  text("SCORE : "+score,displayWidth/2-200,displayHeight/2-200)
  
}
function spawnobstacles(){
  if (frameCount%60===0){
    var candy= createSprite(displayWidth-300,displayHeight/2)
    candy.addImage(candy1)
    candy.velocityX=-5
    candy.scale=0.1
    candy.lifetime=180
    ball.depth=candy.depth+1
    candy.setCollider("rectangle",0,0,candy.width+50,candy.height+100)
    //candy.debug=true
    var rand = Math.round(random(1,3))
    switch (rand) {
      case 1: candy.addImage(candy1)
      break;
      case 2: candy.addImage(candy2)
      break;
      case 3: candy.addImage(candy3)
      candy.scale = 0.02
      break;
      default : break;

    }
  

    candygroup.add(candy)

    
  }

}