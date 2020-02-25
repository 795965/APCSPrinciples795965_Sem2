//Ziggy Sheynin
//Practice Create Task 225
//  This is a comment
//  The setup function function is called once when your program begins

var ships = [];//declares ships array
var balls = []; //declares array
var mainBall;
var mainBall2;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 20);

  loadBalls(50);
  loadShips(50);

}


function draw() {
  background(5,5,5, 20);
  runBalls();
  runShips();
} //end draw

function loadBalls(x){
  mainBall = new Ball(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), -1);
  mainBall2 = new Ball(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), 0);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), random(height), random (-1,1), random(-1,1), i+2);
  }
}//end loadBalls

function runBalls(){
  mainBall.run();
  mainBall2.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}//end runBalls

function loadShips(y){
  for(var i = 0; i < y; i++){
    ships[i]=new Ship(random(width), random(height), random (-1,1), random(-1,1), i+2);
  }
}//end loadShips

function runShips(){
  for (var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}//end runShips
