//Ziggy Sheynin
//Practice Create Task 225

class Ship {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.angle = 0;
   this.clr = color(random(255), random(255), random(255));
   this.id = id;

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.loc.x = width;
    }
    if(this.loc.x > width){
      this.loc.x = 0;
    }
    if(this.loc.y < 0){
      this.loc.y =height;
    }
    if(this.loc.y > height){
    this.loc.y = 0;
    }

  }
  update(){
    var distToMainBall;

    if(this.id > 2){
     distToMainBall = this.loc.dist(mainBall2.loc);

     if(distToMainBall < 800){
       //add attraction
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.5);

     }
     if(distToMainBall < 50){ // add repulsion
       this.acc = p5.Vector.sub(this.loc, mainBall.loc);
       this.acc.normalize();
       this.acc.mult(0.5);
     }


    }
    this.vel.limit(5);
    this.vel.add(this.acc);
    this.loc.add(this.vel);


  }

  render(){
    this.heading = this.vel.heading();
    fill(this.clr);
    this.angle = this.angle +1;
    push();
    translate (this.loc.x, this.loc.y);
    rotate (this.heading +1);
    triangle (-5, 8, 5,8,0, -8);

    pop();
  }
}//  +++++++++++++++++++++++++++++++++++  End ship Class
