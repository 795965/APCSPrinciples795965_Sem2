//  Ziggy Sheynin
// 	Project206 Database Project
//  This is a comment
//  The setup function function is called once when your program begins

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
fill(random(0,255), random(0,255), random(0,255));

}

//  The draw function is called @ 30 fps
function draw() {
  Body();
}

function createPlayerSelectionList() { //code was given in handy snipets
  playerSel = createSelect(true);
  playerSel.position((windowWidth-width)/2 + 270, (windowHeight-height)/2 + 40); // locate at 270,40 in canvas coordinates
  playerSel.size(150,headerHeight-50);
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
  }
}//end aggregateStats

function Body(){ //creates ellipse for the belly that grows the hevaier the player inspect
  background(5);
  ellipse(400, 400, 100, 300); //change second two numbers to be a function of weight
  rect(400, 400, 10, 200);
}//end function body
