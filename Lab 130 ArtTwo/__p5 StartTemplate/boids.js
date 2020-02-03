//Ziggy Sheynin
//Lab 130 Art Two
//This is a comment
//
//

class Boid{
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
    for (var i=boids.length-1; i >0; i--){ //for loop to traverse array
      if(this.loc.dist(boids[i].loc)<200){ //checks the distance between two boids
        stroke(255);
        fill(30, 40, 150, 40); //gives the squares a color
        ellipse(random(0,800), random(0,800), 10, 10); //draws square
      }
    }

  }//end render
//This method will draw a line between its location and the location of any other boid object within 200px.
}//++++++++++++++++++++++++++++++++++++End Boid Class +++++++++++++++++++++++++++++++++++
