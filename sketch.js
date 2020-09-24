var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
 movingRect= createSprite(300, 100, 75, 50);
 movingRect.shapeColor="green";
 fixedRect = createSprite(200,200,50,75)
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
movingRect.shapeColor="blue";

  }
  else(movingRect.shapeColor="green");
  drawSprites();
}