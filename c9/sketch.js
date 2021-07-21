var  box;
var v2
function setup() {
  createCanvas(400,400);
 var box=createSprite(200,200,20,20);
 
}

function draw() 
{
  background(30);
  if(keyIsDown(DOWN_ARROW)){
    background('red');
  }
  if(keyIsDown(UP_ARROW)){
    background('blue');
  }
  if(keyIsDown(LEFT_ARROW)){
    background('green');
  }
  if(keyIsDown(RIGHT_ARROW)){
    background('pink');
  }
drawSprites () ;
}










































































































