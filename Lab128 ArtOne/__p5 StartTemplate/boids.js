//Ziggy Sheynin
//Lab 128 Art One
//This is a comment
//
//

class Boid{
  constructor (x, y, dx, dy, ax, ay clr){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(ax,ay);
    this.color = color(random(255), random(255), random(255));
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

  checkEdges(){
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
    stroke(this.clr);
    line(boid.x, boid.y, boid.x, boid.y); //figure this shit out
  }//end render
//This method will draw a line between its location and the location of any other boid object within 200px.
}//++++++++++++++++++++++++++++++++++++End Boid Class +++++++++++++++++++++++++++++++++++
