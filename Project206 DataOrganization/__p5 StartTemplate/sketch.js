//  Ziggy Sheynin
// 	Project206 Database Project
//  This is a comment
//  The setup function function is called once when your program begins

statsArray = [];
playerweights = [];

function setup() {
  var cnv = createCanvas(500, 500);
  cnv.position((windowWidth-width)/2, 30);
  background(200);
  fill(200, 30, 150);
  fill(random(0,255), random(0,255), random(0,255));

}

//  The draw function is called @ 30 fps
function draw() {
  stickFigure(); //draws stick person
  createPlayerSelectionList();
}

function createPlayerSelectionList() { //code was given in handy snipets
  textAlign(CENTER);

  playerSel = createSelect(true);
  playerSel.position(370, 100); // locate at 370,100 on the screen
  //playerSel.size(150,headerHeight-50);

  for(var i =0; i<statsArray.length; i++){
    playerSel.option(players[i]);
  }
} //end function createPlayerSelectionList

// abstract the UI control away, put the chosen player(s) in the array chosenPlayers
function getSelectedPlayers() {
  chosenPlayers = [];
  for (var i = 0; i<playerSel.elt.selectedOptions.length; i++) {
      chosenPlayers.push(playerSel.elt.selectedOptions[i].value);
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
    statsArray = stats.findRows(player+"*", 2);
  }
} //end loadPlayerStats

//Each element of statsArray has a year of stats for the chosen player.
// To get one stat for the player’s career, traverse the array
//(stat is the index of the desired statistic)
// collect stats into arrays for generic approach to graphing
function aggregateStats(player, stat) {
  results = [];
  for (var i =0; i<statsArray.length; i++) {
   playerSel.option(players[i]);
  }
}//end aggregateStats

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

  ellipse(250, 250, players.weight, 150); //change second two numbers to be a function of weight
}//end function stickFigure
