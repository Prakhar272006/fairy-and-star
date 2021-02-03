var fairyImg,fairyMoving,starnightImg,starImg
var fairySprite,starnight,star,star2
var sound

function preload()

{
   fairyImg = loadImage ("images/fairy.png")
   fairyMoving = loadAnimation ("images/fairy1.png","images/fairy2.png")
   starImg = loadImage("images/star.png")
   starnightImg = loadImage ("images/starnight.png")
}

function setup() {
  createCanvas(800, 750);
  //creating background
  starnight = createSprite(400,325,50,50)
  starnight.addImage(starnightImg)
  //creating fairy
  fairySprite = createSprite(80,600,50,50)
  fairySprite.addImage (fairyImg)
  fairySprite.scale = 0.2
  // creating stars
 star = createSprite(600,100,20,20)
 star.addImage (starImg)
 star.scale = 0.2

 star2 = createSprite(650,100,20,20)
 star2.addImage (starImg)
 star2.scale = 0.1

}


function draw() {
  background("black");
drawSprites();
}
