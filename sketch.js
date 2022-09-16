
function setup() {
 
  createCanvas(1300,1300);
  box=createSprite(650,650,111,111)
    box.shapeColor="blue"
    
}

function draw() 
{
  background("green");
  if (keyIsDown(RIGHT_ARROW)){box.x=box.x+10}
  if (keyIsDown(LEFT_ARROW)){box.x=box.x-10}
 if (keyIsDown(UP_ARROW)){box.y=box.y+10}
 if (keyIsDown(DOWN_ARROW)){box.y=box.y-10}
drawSprites()
}




