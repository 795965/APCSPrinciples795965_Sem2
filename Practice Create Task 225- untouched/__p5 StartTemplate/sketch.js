//Ziggy Sheynin
//Practice Create Task 225
//  This is a comment
//  The setup function function is called once when your program begins

var ships = [];//declares ships array
var balls = []; //declares array
var squares = []; //declares squares array
var mainBall;
var mainBall2;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 20);

  loadBalls(50);
  loadShips(50);
  loadSquares(50);

}


function draw() {
  background(5,5,5, 20);
  runBalls();
  runShips();
  runSquares();


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
  mainShip = new Ship(random(width/2), random(height/2), random(-0.4,.4), random(-.4,.4), -5)
  for(var i = 0; i < y; i++){
    if(y % 2 == 0){
    ships[i]=new Ship(random(width), random(height), random (-1,1), random(-1,1), i+2);
  } else {
    ships[i]=new Ship(random(width), random(height), random (-0.5,0.5), random(-0.5,0.5), i+4);
  }
  }
}//end loadShips

function runShips(){
  for (var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}//end runShips

function loadSquares(n){
  for(var i = 0; i < n; i++){
    squares[i]=new Square(random(width), random(height), random (-1,1), random(-1,1), i+6);
  }
}//end function loadSquares

function runSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].run();
  }
}//end function runSquares
