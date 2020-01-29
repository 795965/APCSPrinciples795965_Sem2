//  Ziggy Sheynin
// 	Lab 128- Art One
//  This is a comment
//  The setup function function is called once when your program begins

var boids = []; //initializes boids array

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);


  loadBoids(); //calls function loadBoids

}

//  The draw function is called @ 30 fps
function draw() {
  loadBoids();
}


function loadBoids(){
  for (var i=0; i<boids.length; i++){
    boids.run();
  }

}//+++++++++++++++++++++++++++end sketch
