//  Ziggy Sheynin
// 	Lab 130- Art Two
//  This is a comment
//  The setup function function is called once when your program begins

var boids = []; //initializes boids array

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);


  loadBoids(60); //calls function loadBoids

}

//  The draw function is called @ 30 fps
function draw() {
runBoids();
}

function loadBoids(n){
  for (var i =0; i< n; i++){
    boids[i] = new Boid(random(width), random(height), random(-1,1), random(-1,1), 40); //initializes and declares bid objects
    }
  }

function runBoids(){
  for (var i =0; i<boids.length; i++){
    boids[i].run();
    }

}//+++++++++++++++++++++++++++end sketch
