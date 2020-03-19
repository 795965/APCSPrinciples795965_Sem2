//  Ziggy Sheynin
// 	Create Task 2020
//  This is a comment
//  The setup function function is called once when your program begins


var score, header_height, snake, difficulty, type;
var gameState = 5;
var h = 10;
var food = [];
var body = [];
var btnEasy, btnMed, btnHard, btnInstructions, btnBTM, btnReplay, btnSea, btnForest, btnGarden;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.position((windowWidth-width)/2, 30);
  background(163, 163, 194);
  header_height = 600;
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
  }else if(gameState === 6){ //insturctuctions screen
    instructionsText();
  }
}

function newButton(){ //declares location and color of all the buttons
  btnEasy = new Button(25, 400, 100, 100, color(78, 219, 18));
  btnMed = new Button(300, 450, 200, 200, color (250,250,7));
  btnHard = new Button(550, 450, 200, 200, color(250, 0, 0));
  btnReplay = new Button(50, 450, 200, 200, color(100));
  btnSea = new Button(25, 250, 150, 100, color(0, 0, 255));
  btnForest = new Button(225, 250, 150, 100, color (23, 200, 100));
  btnGarden = new Button(420, 250, 150, 100, color(15, 71, 38));
  btnInstructions = new Button (110, 440, 400, 100, color(5));
  btnBTM = new Button(110, 540, 400, 100, color(255, 179, 179));
}

function pickSnakeType(){ //allows you to pick the theme
  background(128, 128, 255); //background for theme choosing screen
  btnSea.render(); //draws buttons
  btnForest.render();
  btnGarden.render();
  btnInstructions.render();

  textFont('Georgia')
  textSize(80); //Snake game text
  fill(191, 64, 128);
  text("SNAKE GAME", 40, 150);

  textSize (40); //text for buttons
  fill(255);
  text ("Sea", 65, 278, 200, 200);
  text ("Desert", 240, 278, 200, 200);
  text ("Garden", 430, 278, 200, 200);

  text ("Instructions", 200, 500);


   pickSnake(); // checks which difficulty is chosen
    if (type === 'sea' || type === 'forest'|| type === 'garden'| type === 'instructions'){
      if (type === 'sea'){
        startGame1();
        gameState = 1;
      }else if (type === 'forest'){
        startGame1();
        gameState = 1;
      }else if (type === 'garden'){
        startGame1();
        gameState = 1;
      }else if (type === 'instructions'){
        instructionsText();
        gameState = 6;
      }
    }
}// end pickSnake


function instructionsText(){//function for the instructions

  background(0, 163, 204)
  textSize(20);
  fill(5);
  text("Objective: Make the snake as long as possible", 100, 100);
  text("How: Use the arrow keys to move the snake around to eat the food", 10, 150);
  text("The game ends if the snake hits the edges of the screen", 50, 200);
  text("or if the snake hits itself", 200, 250);
  text("Your score increases by one for each piece of food you eat", 50, 300);
  text("Good Luck!", 250, 350);

  fill(50, 100, 150) //back to main menu button
  btnBTM.render();
  fill(5);
  textSize(40);
  text("Back to Main Menu", 140, 600)

  if(btnBTM.isClicked()=== true){
    gameState = 5;
    clearEverything();
    difficulty = 'clearEverything';
  }

}
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

 // btnBTME.render(); //puts buttons on screen
 // btnReplay.render();
 // fill(20)
 // text("Menu",560, 525, 200, 200);
 // text("Replay", 55, 525, 200, 200);
 // if (btnBTME.isClicked()){ // go back to main menu
 //   difficulty = 'startOver';
 //   clearEverything(); //resets score and where foods go
 // }
 // if (btnReplay.isClicked()=== true){ // replay level
 //   clearEverything();
 //   }
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
  if (btnInstructions.isClicked()=== true){
    type = 'instructions';
  }
} //end pickSnake

function clearEverything() { //clear gamestate and score for restarting level
  gameState = 5;
  // startGame();
  score = 0 ;
  food = [];

} //end clearEverything
