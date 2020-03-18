//  Ziggy Sheynin
//Create Task 2020
////  This is a comment
//  The setup function function is called once when your program begins

class Paddle { //constructor to create paddle
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    this.w = w;
    this.h= h;
    this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.update();
    this.render();
}
update(){ //paddle follows mouse
  var mouseLoc = createVector (mouseX, 600);
  this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09); //lerp function allows paddle to follow mouse
}

render(){ //makes paddle show up on screen
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}


} //*** end class
