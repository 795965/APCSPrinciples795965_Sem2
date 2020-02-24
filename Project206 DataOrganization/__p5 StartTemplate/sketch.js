//  Ziggy Sheynin
// 	Project206 Database Project
//  This is a comment
//  The setup function function is called once when your program begins

var statsArray=[];
var playerweights =[]; //declares array
var chosenPlayer = [];

function setup() {
  var cnv = createCanvas(500, 500);
  cnv.position((windowWidth-width)/2, 30);
  background(200);
  fill(200, 30, 150);

  loadStats();

  createPlayerSelectionList();

  input = createInput();
  input.position(250, 50);
  // playerweights = [statsArray.get(float(player.freethrow))];
}

//  The draw function is called @ 30 fps
function draw() {
  stickFigure(); //draws stick person
  getSelectedPlayer();

  for(var i = 0; i < chosenPlayer.length; i++){
    loadPlayerStats(chosenPlayer[i]);
  }//end for

  aggregateStats();
  stringConverter();
}//end draw

function createPlayerSelectionList() { //creates search box of players
  playerSel = createSelect(true);
  playerSel.position(250, 100); // locate at 270,40 in canvas coordinates
  playerSel.size(150, 100);
  for(var i = 0; i < players.length; i++){
    playerSel.option(players[i]);
  }

//  playerSel.changed(selectPlayer());
} //end function createPlayerSelectionList

function selectPlayer(){

}//end getSelectedPlayer

function createStatSelectionList(){
  statSel = createSelect(true);
  statSel.position((windowWidth+width-300)/2, (windowHeight-height)/2);
  statSel.size(150, 100);
  for(var i = 3; i < statNames.length; i++){
    statSel.option(statNames[i]);
  }
}//end createStatSelectionList


// abstract the UI control away, put the chosen player(s) in the array chosenPlayers
function getSelectedPlayer() {
  chosenPlayer = [];
  for (var i = 0; i<playerSel.elt.selectedOptions.length; i++) {
      chosenPlayer.push(playerSel.elt.selectedOptions[i].value);
    }
  }//end getSelectedPlayers


//Find the rows of stats for a specific player
// find the stats for the chosen player in the stats table.
//result is an array of table rows, one for each year the player was in the league
function loadPlayerStats(player) {
// column 2 has the player's name in the stats table
  statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
// try adding an '*'
    statsArray = stats.findRows(player+ "*", 2);
  }
} //end loadPlayerStats

//Each element of statsArray has a year of stats for the chosen player.
// To get one stat for the player’s career, traverse the array
//(stat is the index of the desired statistic)
// collect stats into arrays for generic approach to graphing
function aggregateStats(){
  results = [];
  for(var i = 0; i<statsArray.length; i++) {
    results.push(float(statsArray[i].get(45)));
  }
}//end aggregateStats

// function getFreeThrows(){
//   getFreeThrows = [];
//   weight = results[0];
//   for(var i = 0; i<statsArray.length; i++) {
//     getFreeThrows.push(statsArray[i].get(44));
//     weight = results[i];
//   }
// }

function stringConverter(){
  for(var i = 0; i < results.length; i++){
    results[i] = parseInt(results[i], 10);
    weight = results[i];
  }
}

function stickFigure(){ //creates the stick stickFigure
  background(200); //background
  line(250, 100, 250, 275); //body
  fill(255, 240, 240); //head color
  ellipse(250, 100, 75, 75); //head
  line(240, 75, 240, 100); //left eye
  line(260, 75, 260, 100); //right eye
  fill(255);
  quad(235, 110, 240, 120, 260, 120, 265, 110); //mouth
  line(250, 175, 175, 150); //left arm
  line(250, 175, 325, 150); //right arm
  line(250, 275, 200, 400); //left leg
  line(250, 275, 300, 400); //right leg

 //for(var i= 0; i < playerweights.length -1; i++){
  //  fill(random(0, 255), random(0, 255), random(0, 255));

  //  for(var x = 0; x < players.length -1; x++){
  //   if(player.name === chosenPlayer[i]){
         ellipse(250, 250, 208, 150); //draws body
  //   }
//    }


    text('weight: ' + 208, 30, 400); //writes the weight of the player on the screen
 //}


}//end function stickFigure
