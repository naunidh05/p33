var snow,bg,snowimg;

function preload(){
  bg=loadImage("snow2.jpg")
//snowimg-loadImage("snow5.webp")

}
  


function setup() {
  createCanvas(windowWidth,windowHeight);
 snow= createSprite(400, 200, 50, 50);
//snow.addImage("ice",snowimg);
}

function draw() {
  background(bg);  
  drawSprites();
}