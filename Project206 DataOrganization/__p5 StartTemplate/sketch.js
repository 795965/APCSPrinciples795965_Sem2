//  Ziggy Sheynin
// 	Project206 Database Project
//  This is a comment
//  The setup function function is called once when your program begins

var statsArray = []; //initializes statsArray

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadStats();
  createPlayerSelectionList();
  createStatSelectionList();


} //end setup

function draw() {
  fill(5);
  textSize(30);
  text('Select Player and Desired Statistic:', + 75, 50); //writes text on initial screen
  drawStickFigure(); //draws the player
  getSelectedPlayers(); //calls function to create players list box
  getSelectedStat(); //calls function to create stats list box

  for(var i = 0; i < chosenPlayer.length; i++){
    loadPlayerStats(chosenPlayer[i]);
  } //end for for putting players into array

  aggregateStats(chosenStat[0]);
  getYears(); //for graph
  toString(); //turns all variables into the same type
  getSmall(); //for graphing values
  getLarge();
  drawGraph(); //function to make the graph
}

function drawStickFigure(){ //function to create player
  fill(255);
  stroke(5);
  background(230, 100, 120, 100); //background
  line(250, 100, 250, 275); //body
  fill(255, 240, 240); //head color
  ellipse(250, 100, 75, 75); //head
  line(240, 75, 240, 100); //left eye
  line(260, 75, 260, 100); //right eye
  fill(255);
  line(250, 175, 175, 150); //left arm
  line(250, 175, 325, 150); //right arm
  line(250, 275, 200, 400); //left leg
  line(250, 275, 300, 400); //right leg
  quad(235, 110, 240, 120, 260, 120, 265, 110); //mouth

}//end function drawStickFigure\

function createPlayerSelectionList() {
  playerSel = createSelect(true);
  playerSel.position(200, 200); // locate at 270,40 in canvas coordinates
  playerSel.size(150, 100);
  for(var i = 0; i < players.length; i++){
    playerSel.option(players[i]);
  }
} //from Mr. Schulman
//end createPlayerSelectionList

function createStatSelectionList(){
  statSel = createSelect(true);
  statSel.position(600, 200);
  statSel.size(150, 100);
  for(var i = 3; i < statNames.length; i++){
    statSel.option(statNames[i]);
  }
}//from Mr. Schulman
//end createStatSelectionList

// abstract the UI control away, put the chosen player(s) in the array chosenPlayers
function getSelectedPlayers() {
  chosenPlayer = [];
  for (var i = 0; i < playerSel.elt.selectedOptions.length; i++) {
    chosenPlayer.push(playerSel.elt.selectedOptions[i].value);
  }
} //end getSelectedPlayer
//from Mr. Schulman

function getSelectedStat(){
  chosenStat = [];
  for(var i = 0; i < statSel.elt.selectedOptions.length; i++){
    for(var j = 0; j < statNames.length ; j++){
      if(statSel.elt.selectedOptions[i].value === statNames[j]){
        chosenStat.push(j);
      }
    }
  } //got help on this as well
}//end getSelectedStat

// find the stats for the chosen player in the stats table. result is an array of table rows, one for each year the player was in the league
function loadPlayerStats(player) {
  // column 2 has the player's name in the stats table
  statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
    // try adding an '*'
    statsArray = stats.findRows(player+ "*", 2);
  }
} //end loadPlayerStats
//from Mr. Schulman

// collect stats into arrays for generic approach to graphing
function aggregateStats(stat){ //function to put all stats into one array
  collectStats = []; //collects the values for each statistic in the database
  for(var i = 0; i<statsArray.length; i++) {
    collectStats.push(statsArray[i].get(stat));
  }
} //end aggregateStats
////from Mr. Schulman

function getYears(){ //for x-axis of graph
  years = [];
  for(var i = 0; i<statsArray.length; i++) {
    years.push(statsArray[i].get(1));
  }
} //end getYears

function getSmall(){ //helps to create graph that fits on screen
  smallest = collectStats[0];
  for(var i = 0; i < collectStats.length; i++){
    if (smallest > collectStats[i]) {
      smallest = collectStats[i]; //traverses array to find the smallest value to know how far down to start the graph
    }
  }
} //end getSmall

function getLarge(){//helps to create graph that fits on screen
  largest = collectStats[0];
  for(var i = 0; i < collectStats.length; i++){
    if (largest < collectStats[i]) {
      largest = collectStats[i];//traverses array to find the largest value to know how far up to end the graph
    }
  }
}//end getLarge

function toString(){ //turns all data into same type
  for(var i = 0; i < collectStats.length; i++){
    collectStats[i] = parseInt(collectStats[i], 10);
  }
}//end toString

function drawGraph(){
  var x1, y1, x2, y2;
  for(var i = 0; i < collectStats.length; i++){
    x1 = i*(width-100)/collectStats.length + 50;
    y1 = map(collectStats[i], smallest, largest, 250, 750);
    x2 = (i+1)*(width-100)/collectStats.length + 50;
    y2 = map(collectStats[i+1], smallest, largest, 250, 750);
    stroke(255, 255, 255);
    line(x1, y1, x2, y2);
    textSize(20);
    textAlign(CENTER, BOTTOM);
    text(years[i], x1, 800);
  }
}//end drawGraph
