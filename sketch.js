var catImg, mouseImg

var tom, jerry


function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg1 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catImg2 = loadImage("images/cat1.png")
    catImg3 = loadImage("images/cat4.png")
    mouseImg2 = loadImage("images/mouse1.png")
    mouseImg3 = loadImage("images/mouse4.png")
    backgroundImg = loadImage("images/garden.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(700,500,30,30)
    tom.addImage("tom", catImg2)
    tom.addAnimation("walking", catImg1)
    tom.addAnimation("stop", catImg3)
    tom.scale=0.1

    jerry = createSprite(200,500,30,30)
    jerry.scale = 0.1
    jerry.addImage("jerry",mouseImg2)
    jerry.addAnimation("teasing", mouseImg1)
    jerry.addAnimation("looking", mouseImg3)

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        tom.velocityX = 0
        tom.changeAnimation("stop",catImg3)
        jerry.changeAnimation("looking", mouseImg3)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX = -10;
      tom.changeAnimation("walking", catImg1)
      jerry.changeAnimation("teasing", mouseImg1)
  }
  

}
