//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins


var score, header_height, snake, difficulty;
var gameState = 1;
var h = 10;
var food = [];
var body = [];
var btnEasy, btnMed, btnHard, btnInstructions, btnBTMI, btnBTME, btnReplay;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(100, 200, 100);
  header_height = 800;
  score = 0;
  loadObjects(2);
  newButton();
}

function draw(){
    if (gameState ===1){
      startGame(); //start screen
    }else if (gameState === 2){
      playGame(); //game screen
    }else if (gameState === 3){
      instructionsText();
    }else if (gameState === 4){ //game over screen
      endGame();
  }
}

function newButton(){
  btnEasy = new Button(50, 450, 200, 200, color(78, 219, 18));
  btnMed = new Button(300, 450, 200, 200, color (250,250,7));
  btnHard = new Button(550, 450, 200, 200, color(250, 0, 0));
  btnBTME = new Button(550, 450, 200, 200, color(200));
  btnReplay = new Button(50, 450, 200, 200, color(100))
}

function startGame1(){
//change look of this
  textSize(80);

  background(100, 200, 100);
  fill(121, 76, 222);
  textAlign(RIGHT);
  textFont('Times New Roman')
  text ("Snake Game", 600, 200); //title
  textAlign(CENTER);

  btnEasy.render(); //draws buttons
  btnMed.render();
  btnHard.render();

  textSize (45); //text for buttons
  fill(255);
  text ("EASY", 55, 525, 200, 200);
  text ("HARD", 560, 525, 200, 200);
  text ("MEDIUM", 305, 530, 200, 200);

    checkDifficulty(); // checks which difficulty is chosen
    if (difficulty === 'easy' || difficulty === 'medium'|| difficulty === 'hard'){
      if (difficulty === 'easy'){
        loadObjects(7);
      }else if (difficulty === 'medium'){
        loadObjects (5);
      }else if (difficulty === 'hard'){
        loadObjects (2);
      }
      gameState = 2; // play game
    }
}

function playGame(){
  frameRate(10);
  background(100, 200, 100);
  runObjects();
  text ("Score: " + score, 100, 50); //score
  checkTangled();
}

function endGame(){
background(255,21,21);
 fill(5);
 textSize(100);
 text("GAME OVER!", 400, 300);
 textSize(45);

 btnBTME.render();
 btnReplay.render();
 fill(20)
 text("Menu",560, 525, 200, 200);
 text("Replay", 55, 525, 200, 200);
 if (btnBTME.isClicked()){ // go back to main menu
 //  gameState = 1;
   difficulty = 'startOver';

   clearEverything();
 }
 if (btnReplay.isClicked()=== true){ // replay level
   clearEverything();
   }
 }


function loadObjects(n){
  snake = new Snake (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30,30, color(227, 69, 7));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30, color(70));
      }
  }

function runObjects(){
    snake.run();

  for(var i = 0; i< food.length; i++){
    food[i].run();
  }
}

function checkTangled(){
  if(snake.tangled() === true){
    gameState  = 4;
  }
}

function checkDifficulty(){ //check which difficulty button is isClicked
  if (btnEasy.isClicked()=== true){
     difficulty = 'easy';
   }
 if (btnMed.isClicked()===true){
    difficulty = 'medium';
  } if (btnHard.isClicked()=== true){
    difficulty = 'hard';
  }
}
function clearEverything() { //clear gamestate and score for restarting level
  gameState = 1;
  // startGame();
  score = 0 ;
  timerValue = 10;
  food = [];

}
