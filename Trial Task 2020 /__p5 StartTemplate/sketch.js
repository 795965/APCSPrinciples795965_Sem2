//  Ziggy Sheynin
//Create Task 2020
//  This is a comment
//  The setup function function is called once when your program begins

var balls = []; //declares array or balls
var paddle; //declares paddle
var mode, difficulty; //declares variable to decide difficulty
var score =0; //initiates score at 0
var gameState = 1; //starts the game at the main menu
var win; //declares win variable
var btnClassic, btnDeath, btnEasy, btnMed, btnHard, btnInstruction, btnRestart, btnBTMI, btnBTME; //dcelares all buttons

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  newButton();
} //end setup

//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5);
  if (gameState ===1){
    pickGame();
  }else if (gameState === 2){
    startGameClassic();
  }else if (gameState === 3){
    playGame(); //game screen
  }
  else if (gameState === 4){
    instructionsText(); //game over screen
    if(btnBTMI.isClicked() === true){
      gameState = 1;
    }
  }else if (gameState === 5){
    endGame(); //game over screen
  }

} //end draw

function newButton(){
  btnEasy = new Button (50, 610 ,200, 100, color(0,255,0));
  btnMed = new Button (300, 610, 200, 100, color(0,204,204));
  btnHard = new Button (550, 610, 200, 100, color(153,0,0));
  btnInstruction = new Button (550, 75, 210, 100, color(179,179,179));
  btnBTMI = new Button (150, 450, 500, 75, color(255));
  btnReplay = new Button (50, 450, 250, 75, color (255));
  btnBTME = new Button (400, 450, 370, 75, color(255));
  btnClassic = new Button (100, 690, 300, 100, color(20, 200, 150));
  btnDeath = new Button (450, 690, 300, 100, color(200, 20, 150));


} //puts all the buttons at their spots on the screen

function pickGame(){
  textSize(75);
  fill(255);
  textAlign(CENTER);
  text("Paddle Game", 400, 400); // title text


  btnClassic.render();
  btnDeath.render();
  btnInstruction.render();
  fill(255);
  textSize(40);
  text("Classic Mode", 250, 750);
  text("Death Ball Mode", 600, 750);

  fill(179,179,179); //Instructions button
  fill(0,90,0);
  textSize(40);
  text("Instructions", 655, 145);


  //   //checks if user presses classic of death mode button
  checkMode();
  //moves to next splash screen
  if(mode==='classic'||mode==='death'){
    if(mode==='classic'){
      startGameClassic();
      gameState = 2;
    }
    if(mode==='death'){
      startGameDeath();
    }


    if(mode==='instructions'){
      instructionsText();
      gameState=4;
    }


  }
}
function playGame(){
  fill (255);
  textSize (40);
  text ("SCORE:" + score, 100 , 50);
  runObjects();
  if (checkRed() === true|| balls.length === 0){
    gameState= 5;
    win = 'yes';
  } else if( score < 0 ){
    gameState = 5;
    win = 'no';
  }
} //end playGame

function startGameClassic(){//easy, medium, hard
  textSize(75);
  fill(255, 255, 240);
  textAlign(CENTER);
  text("Classic Mode", 400, 300); // title text


  btnEasy.render();
  btnMed.render();
  btnHard.render();

  fill(0,0,0);
  textSize(40);
  text("Easy", 150, 675);
  text("Medium", 400, 675);
  text("Hard", 650, 675);

  //   //checks if user presses easy, medium or hard button
  checkDifficulty();
  //moves to next splash screen
  if(difficulty==='easy'||difficulty==='medium'||difficulty==='hard'||difficulty === 'instructions'|| difficulty=== 'startOver'){
    if(difficulty==='easy'){
      loadObjects(5);
        gameState=3;
    }
    if(difficulty==='medium'){
      loadObjects(10);
        gameState=3;
    }
    if(difficulty==='hard'){
      loadObjects(25);
        gameState=3;
    }


    if(difficulty==='instructions'){
      instructionsText();
      gameState=4;
    }


  }
}//end startGame

  function loadObjects(x){
    paddle = new Paddle (400, 500, 150, 40);
    for(var i = 0; i < x; i++){
      balls[i]=new Ball(random(width), 0 , 4,4, i);
    }
  } //end loadObjects

  function checkDifficulty(){
    //if mouse touches easy
    if(mouseIsPressed&&
        mouseX>50&&
        mouseX<250&&
        mouseY>600&&
        mouseY<700){
          difficulty='easy'
        }
        //if mouse touches medium
    if(mouseIsPressed&&
        mouseX>300&&
        mouseX<500&&
        mouseY>600&&
        mouseY<700){
          difficulty='medium'
        }
        //if mouse touches hard
    if(mouseIsPressed&&
        mouseX>550&&
        mouseX<750&&
        mouseY>600&&
        mouseY<700){
          difficulty='hard'
        }

}// end checkDifficulty

function checkMode(){
  //if mouse touches Classic
  if(mouseIsPressed&&
      mouseX>100&&
      mouseX<250&&
      mouseY>690&&
      mouseY<700){
        mode='Classic'
      }
      //if mouse touches Death
  if(mouseIsPressed&&
      mouseX>300&&
      mouseX<500&&
      mouseY>600&&
      mouseY<700){
        mode='Death'
      }

      if(mouseIsPressed&&
        mouseX>550&&
        mouseX<700&&
        mouseY>50&&
        mouseY<210){
          mode='instructions'
        }
}// end checkDifficulty



function endGame(){ //function for game over
if (win === 'yes'){ //if the score is greater than zero, you win
    textSize(80);
    fill (10, 255, 50);
    text ("YOU WIN", 350, 200);
    text ("SCORE:" + score, 350, 325);
  }else if (win === 'no'){ //if you get a red ball first or your score goes below zero, you lose
    textSize(80);
    fill (255, 10, 10);
    text ("YOU LOSE", 350, 250);
  }
  fill(50, 100, 150) //Restart
  rect(50, 450, 250, 75);
  fill(40, 200, 100);
  textSize(30);
  text("Restart", 175, 500)

  if(mouseIsPressed&&
    mouseX>50&&
    mouseX<300&&
    mouseY>450&&
    mouseY<525){
      gameState = 2;
      clearEverything();
    }
    fill(50, 100, 150) //Back to Main Menu
    btnBTME.render();
    fill(40, 200, 100);
    textSize(20);
    text("Back to Main Menu", 600, 500)
    if (btnBTME.isClicked()){
      clear();
      gameState =2;
      difficulty = 'startOver'
      clearEverything();
}
} //end of endgame

function instructionsText(){

  textSize(20);
  fill(255);
  text("Move the mouse around the screen to move the paddle.", 400, 100);
  text("Try to get only the green balls, if you touch a red ball your score goes down", 400, 200);
  text("Once you have removed all the green balls, the game is over", 400, 300);
  text("Good Luck!", 400, 400);

  fill(50, 100, 150) //back to main menu button
//  rect(150, 450, 500, 75);
btnBTMI.render();
  fill(40, 200, 100);
  textSize(20);
  text("Back to Main Menu", 400, 500)

  if(btnBTMI.isClicked()=== true){
    gameState = 2;
    clearEverything();
    difficulty = 'clearEverything';
  }

} //end of instructionsText

function runObjects(){
paddle.run();
for(var i = 0; i < balls.length; i++){
    balls[i].run();
} //end RunObjects
}

function checkRed(){ //checks to see if there are only red balls left
  var numRed = 0;
  for (var i = 0 ; i < balls.length; i++){
   if (balls[i].getID()% 2===0){
numRed++;     }
  }
  if (balls.length === numRed){
    return true;
  }
}//end checkRed

function clearEverything(){ //returns to origianl state
  gameState =2;
  score = 0;
}
