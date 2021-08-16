var iss, spacecraft;
var bg, issIMG, spacecraftIMG;
var hasDocked = false;

function preload(){
  bg = loadImage("spacebg.jpg");
  issIMG = loadImage("iss.png");
  spacecraftIMG = loadImage("spacecraft1.png");
  spacecraftIMG1 = loadImage("spacecraft2.png");
  spacecraftIMG2 = loadImage("spacecraft3.png");
  spacecraftIMG3 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(280, 240);
  spacecraft.addImage(spacecraftIMG);
  spacecraft.scale = 0.15;
  iss = createSprite(300, 150);
  iss.addImage(issIMG);
  iss.scale = 0.65;
}

function draw() {
  background(bg);
  spacecraft.addImage(spacecraftIMG);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1, 1);
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y - 2;
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraftIMG3);
    spacecraft.x = spacecraft.x - 1;
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraftIMG2);
    spacecraft.x = spacecraft.x + 1;
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraftIMG1);
  }
}
  if(spacecraft.y <= (iss.y + 55) && spacecraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}