//Ziggy Sheynin
//Lab 130 Art Two
//This is a comment
//

class Orbiter{
  constructor (x, y, dx, dy, clr){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 1);
    this.clr = color(random(255), random(255), random(255));
  } //end Boids constructor


  run(){
    this.render();
    this.checkEdges();
    this.update();
  } //end run function

  update(){
      this.vel.limit(3);
      this.loc.add(this.vel);
      this.vel.add(this.acc);
  }//end update

  checkEdges(){ //keeps boids on screen
    if(this.loc.x<0){
      this.loc.x=width;
    }
    if(this.loc.x>width){
      this.loc.x=0;
    }
    if(this.loc.y<0){
       this.loc.y=height;
    }
    if(this.loc.y>height){
       this.loc.y=0;
    }
  }//end checkEdges
//  Either warp or bounce

  render(){
    for (var i=orbiters.length-1; i >0; i--){ //for loop to traverse array
      fill(this.clr);
      ellipse(x, y, 30, 30);
    }


  }//end render
}//+++++++++++++++++++++++End of Orbiter Class ++++++++++++++++++++++++++++++++
