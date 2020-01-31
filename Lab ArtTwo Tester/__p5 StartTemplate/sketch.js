//  Ziggy Sheynin
// 	Lab 130- Art Two
//  This is a comment
//  The setup function function is called once when your program begins

var circle = 100;
var rot;
var col;
var freq = 0.000001;
var cont = 0;
var r;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(242);
  translate(300, 300);
  rotate(radians(rot));

 ellipseMode(RADIUS);
  for (var i=0; i<500; i ++) {
    circle= 100 + 75*sin(millis()*freq*i);
    col=map(circle,150,250,255,60);
    r=map(circle,150,250,5,2);
    fill(col,0,74);
    noStroke();
    ellipse(circle*cos(i), circle*sin(i),r,r);
    rot=rot+0.00005;
  }
}//+++++++++++++++++++++++++++end sketch
