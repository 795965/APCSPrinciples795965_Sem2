

//  eettlin
//  306
var paddle, mainBall;
var balls  = [];
// Setup runs once at the start of your program


function setup() {
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//  back ground color
  paddle = new Paddle(width/2, height - 100, 100, 10);
  mainBall = new Ball(width/2, 20, random(-3, 3), random(-3, 3), -1);
  loadBalls(33);
}

//  Draw runs 30 times each second
function draw() {
  // put drawing code here
    background(20,20,20, 20);//  back ground color
    paddle.run();
    mainBall.run();
    for(var i =0; i < balls.length; i++){
      balls[i].run();
    }
}

function loadBalls(numBalls){
  for(var i =0; i < numBalls; i++){
    balls[i] = new Ball(random(width),50, random(-3.0, 3.0), random(-3.0, 3.0), i);
  }

}
