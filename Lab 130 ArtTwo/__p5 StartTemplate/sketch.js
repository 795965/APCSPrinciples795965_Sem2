//  Ziggy Sheynin
// 	Lab 130- Art Two
//  This is a comment
//  The setup function function is called once when your program begins

var circle = 100;
var rot;
var color;
var freq = 0.000001;
var cont = 0;
var r;

var boids = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);


  loadBoids(30); //calls function loadBoids

}

//  The draw function is called @ 30 fps
function draw() {
  background(5);
  translate(width/2, height/2);

  rotate(radians(rot));

  ellipseMode(RADIUS);

    for (var i=0; i<500; i++){
      circle = 50 + 85*sin(millis()*freq*i);
      color = map(circle,150,250,255,60);
      r = map(circle,150,250,5,2);
      fill(color,0,74);
      //noStroke();
      ellipse(circle*cos(i), circle*sin(i),r,r);
      rot=rot+0.00005;
    } //end for loop

  //  runBoids();
  }//end draw

function loadBoids(n){
  for (var i =0; i< n; i++){
   boids[i] = new Boid(5,5,5,5); //initializes and declares boid objects
    }
  }

function runBoids(){
  for (var i =0; i<boids.length; i++){
    boids[i].run();
    }

}//+++++++++++++++++++++++++++end sketch
