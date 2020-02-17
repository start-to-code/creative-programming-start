/*
* Variables
*/
let canvas = null;

/* 
* Setup the p5 application
*/
function setup () {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
}

/* 
* Draw some realtime stuff
*/
function draw () {
  
}

/*
* When the window resize, do:
* - resize the canvas
* - reposition the canvas
*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
}