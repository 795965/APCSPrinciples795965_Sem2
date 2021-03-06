//Ziggy Sheynin
//Practice Create Task 225
//  This is a comment
//  The setup function function is called once when your program begins

var ships = [];//declares ships array
var balls = []; //declares array
var squares = []; //declares squares array
var mainBall, mainBall2;
var btnShips, btnSquares, btnBalls, btnAll, btnBTM;
var gameState = 1;
var difficulty;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 20);

   loadBalls(50);
   loadShips(50);
   loadSquares(50);
   loadMainBalls(2);
   newButton();


}


function draw() {
background(5,5,5, 20);
  if (gameState ===1){
    startEcosystem();
  }else if (gameState === 2){
    runEcosystem();
  }else if (gameState === 3){
    endSystem();
  }

} //end draw

function newButton(){ //declares location and color of all the buttons

  btnBalls = new Button(50, 450, 220, 200, color(54, 191, 136));
  btnShips = new Button(300, 450, 220, 200, color (54, 132, 191));
  btnSquares = new Button(550, 450, 220, 200, color(173, 54, 191));
  btnAll = new Button(300, 200, 220, 200, color(191, 54, 111));
  btnBTM = new Button(10, 10, 50, 50, color(200));
}

function startEcosystem(){
  background(235, 64, 52);
  btnAll.render();
  btnShips.render();
  btnBalls.render();
  btnSquares.render();

  textSize(100); //Title  text
  fill(5);
  text("Ecosystem", 170, 150);

  textSize(45);
  fill(5);
  text ("Balls", 55, 525, 200, 200);
  text ("Squares", 560, 525, 200, 200);
  text ("Ships", 305, 530, 200, 200);
  text ("Ecosystem", 300, 250, 200, 200);

  checkButton(); // checks which difficulty is chosen
  //I got help from Elena Campell on this code
  if (difficulty === 'balls' || difficulty === 'ships'|| difficulty === 'squares' || difficulty === 'ecosystem'){
    if (difficulty === 'balls'){
      runBalls(50);
      runMainBalls();
    }else if (difficulty === 'ships'){
      runShips(50);
      runMainBalls();
    }else if (difficulty === 'squares'){
      runSquares(50);
      runMainBalls();
    }else if (difficulty === 'ecosystem'){
      runBalls(50);
      runShips(50);
      runSquares(50);
      runMainBalls();
    }
    gameState = 2; // play game
  }
}

function checkButton(){ //check which button is isClicked
  //I got help from Elena Campell on this code

  if (btnBalls.isClicked()=== true){
     difficulty = 'balls';
   }
 if (btnShips.isClicked()===true){
    difficulty = 'ships';
  }
   if (btnSquares.isClicked()=== true){
    difficulty = 'squares';
  }
 if (btnAll.isClicked()=== true){
  difficulty = 'ecosystem';
}
if (btnBTM.isClicked()=== true){
 difficulty = 'startOver';
}
}// end checkDifficulty

function runEcosystem(){ //function to continue the running of each gamestate
  //I got help from Elena Campell on this code
  if (difficulty === 'balls' || difficulty === 'ships'|| difficulty === 'squares' || difficulty === 'ecosystem'){ //checks to see which button is clicked
    if (difficulty === 'balls'){ //runs the main balls and orbiters
      runBalls(50); //makes 50 orbiter objects
      runMainBalls();
    }else if (difficulty === 'ships'){ //runs main balls and ships
      runShips(50);
      runMainBalls();
    }else if (difficulty === 'squares'){ //runs main balls and squares
      runSquares(50);
      runMainBalls();
    }else if (difficulty === 'ecosystem'){ //runs all of the possible objects
      runBalls(50);
      runShips(50);
      runSquares(50);
      runMainBalls();
    }
  }

  btnBTM.render(); //renders the grey menu button

  if (btnBTM.isClicked()=== true){ //if the menu button is clicked, gor back to the menu
   difficulty = 'startOver'; //sets a new variable for the button
   clearEverything(); //sets the gameState back to the home screen
 }
}//end runEcosystem


function loadMainBalls(){
  mainBall = new Ball(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), -1);
  mainBall2 = new Ball(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), 0);

}
function loadBalls(x){
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), random(height), random (-1,1), random(-1,1), i+2);
  }
}//end loadBalls

function runMainBalls(){
  mainBall.run();
  mainBall2.run();
}
function runBalls(){
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

function clearEverything() { //clear gamestate and score for restarting level
  gameState = 1;


}
