var x = 300;
var y = 40;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("yellow");
  rect(10,160,10,100)
  rect(380,mouseY,10,100)
  circle(x,y,10,10)
  x=x-1
  y=y+1
}