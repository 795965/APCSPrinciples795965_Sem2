//Ziggy Sheynin
//Lab 128 Art One
//This is a comment
//
//

class Boid{
  constructor (x, y, dx, dy, clr){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.color = color(random(255), random(255), random(255));
  } //end Boids constructor


  run(){

  } //end run function
update(){

}//end update
//Add acc to vel and vel to loc
//limit the speed
checkEdges(){

}//end checkEdges
//  Either warp or bounce
render(){

}//end render
//This method will draw a line between its location and the location of any other boid object within 200px.
}//++++++++++++++++++++++++++++++++++++End Boid Class +++++++++++++++++++++++++++++++++++
