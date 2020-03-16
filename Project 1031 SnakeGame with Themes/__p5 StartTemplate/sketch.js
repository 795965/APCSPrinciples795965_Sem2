//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins


var score, header_height, snake, difficulty, type;
var gameState = 5;
var h = 10;
var food = [];
var body = [];
var btnEasy, btnMed, btnHard, btnInstructions, btnBTMI, btnBTME, btnReplay, btnSea, btnForest, btnGarden;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(100, 200, 100);
  header_height = 800;
  score = 0; //iniital score
  newButton();
}

function draw(){ //decides what screen to go to
    if (gameState ===1){
      startGame2(); //start screen
    }else if (gameState === 2){
      playGame(); //game screen
    }else if (gameState === 4){ //game over screen
      endGame();
  } else if(gameState === 5){ //screen to pick theme
    pickSnakeType();
  }
}

function newButton(){ //declares location and color of all the buttons
  btnEasy = new Button(50, 450, 200, 200, color(78, 219, 18));
  btnMed = new Button(300, 450, 200, 200, color (250,250,7));
  btnHard = new Button(550, 450, 200, 200, color(250, 0, 0));
  btnBTME = new Button(550, 450, 200, 200, color(200));
  btnReplay = new Button(50, 450, 200, 200, color(100));
  btnSea = new Button(50, 200, 200, 200, color(0, 0, 255));
  btnForest = new Button(300, 200, 200, 200, color (23, 200, 100));
  btnGarden = new Button(550, 200, 200, 200, color(15, 71, 38));
}

function pickSnakeType(){ //allows you to pick the theme
  background(73, 50, 173); //purple background for theme choosing screen
  btnSea.render(); //draws buttons
  btnForest.render();
  btnGarden.render();

  textSize(100); //Snake game text
  fill(5);
  text("Snake Game", 50, 150);

  textSize (45); //text for buttons
  fill(255);
  text ("Sea", 70, 250, 200, 200);
  text ("Garden", 575, 250, 200, 200);
  text ("Forest", 320, 250, 200, 200);

   pickSnake(); // checks which difficulty is chosen
    if (type === 'sea' || type === 'forest'|| type === 'garden'){
      if (type === 'sea'){
        startGame1();
        gameState = 1;
      }else if (type === 'forest'){
        startGame1();
        gameState = 1;
      }else if (type === 'garden'){
        startGame1();
        gameState = 1;
      }
    }
}// end pickSnake


function startGame1(){ //main menu screen
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
        loadObjects(7); //makes 7 food objects
      }else if (difficulty === 'medium'){
        loadObjects (5); //makes 5 food objects
      }else if (difficulty === 'hard'){
        loadObjects (2); //makes 2 food objects
      }
      gameState = 2; // play game
    }
}//end starteGame1

function startGame2(){
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
}//end startGame2

function playGame(){ //function to play the game
  frameRate(10); //makes snake go at normal speed
  if(type === 'garden'){ //makes background specific to theme
    background(100, 200, 100);
  } else if (type === 'forest'){
    background(19, 97, 50);
  }else if(type === 'sea'){
    background(11, 75, 179);
  }
  runObjects(); //calls runOjects function
  text ("Score: " + score, 100, 50); //score
  checkTangled(); //if tangled, game Over
} //end playGame

function endGame(){ //created end screen
  background(255,21,21); //red background
 fill(5);
 textSize(100);
 text("GAME OVER!", 400, 300); //game over text
 textSize(45);

 btnBTME.render(); //puts buttons on screen
 btnReplay.render();
 fill(20)
 text("Menu",560, 525, 200, 200);
 text("Replay", 55, 525, 200, 200);
 if (btnBTME.isClicked()){ // go back to main menu
   difficulty = 'startOver';
   clearEverything(); //resets score and where foods go
 }
 if (btnReplay.isClicked()=== true){ // replay level
   clearEverything();
   }
 }


function loadObjects(n){ //function to declare snake and food objects
  if(type === 'garden'){ //checks to see what type is chosen, then prints colors specific to that theme
  snake = new Snake (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30,30, color(227, 69, 7));
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30, color(70));
      }
    }else if (type === 'forest'){
      snake = new Snake (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30,30, color(20));
        for (var j = 0; j < n; j++){
          food[j] = new Food (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30, color(202, 237, 0));
          }
    } else if(type === 'sea'){
      snake = new Snake (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30,30, color(162, 0, 255));
        for (var j = 0; j < n; j++){
          food[j] = new Food (Math.floor(Math.random()*26)*30,Math.floor(Math.random()*26)*30, color(0, 255, 229));
          }
    }
  }// end loadObjects

function runObjects(){
    snake.run();
    for(var i = 0; i< food.length; i++){//renders food objects based on length of array
      food[i].run();
    }
  } //end runOjects

function checkTangled(){ //checks to see if snake is tangled
  if(snake.tangled() === true){
    gameState  = 4; //game over
  }
} //end checkTangled

function checkDifficulty(){ //check which difficulty button is isClicked
  if (btnEasy.isClicked()=== true){
     difficulty = 'easy';
   }
 if (btnMed.isClicked()===true){
    difficulty = 'medium';
  } if (btnHard.isClicked()=== true){
    difficulty = 'hard';
  }
}// end checkDifficulty

function pickSnake(){ //check which difficulty button is isClicked
  if (btnSea.isClicked()=== true){
     type = 'sea';
   }
 if (btnForest.isClicked()===true){
    type = 'forest';
  } if (btnGarden.isClicked()=== true){
    type = 'garden';
  }
} //end pickSnake

function clearEverything() { //clear gamestate and score for restarting level
  gameState = 1;
  // startGame();
  score = 0 ;
  food = [];

} //end clearEverything
