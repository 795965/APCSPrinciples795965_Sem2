//Ziggy Sheynin
//Practice Create Task 225

class Square {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
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
    var distToMainShip;

    if(this.id > 2){
     distToMainBall = this.loc.dist(mainBall.loc);



     if(distToMainBall < 800){
       //add attraction
       this.acc = p5.Vector.sub(mainBall2.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.3);

     }
     if(distToMainBall < 70){ // add repulsion
       this.acc = p5.Vector.sub(this.loc, mainBall.loc);
       this.acc.normalize();
       this.acc.mult(0.3);
     }
   }
     if(this.id > 3){
      distToMainShip = this.loc.dist(mainShip.loc);
        if(distToMainShip < 30){
          //add attraction
          this.acc = p5.Vector.sub(mainShip.loc, this.loc);
          this.acc.normalize();
          this.acc.mult(0.3);
        }

    }
    this.vel.limit(3);
    this.vel.add(this.acc);
    this.loc.add(this.vel);


  }

  render(){
    push();
    translate (this.loc.x, this.loc.y);
    //rotate (this.heading +1);
    rect(10, 10, 10, 10);

    pop();
  }
}//  +++++++++++++++++++++++++++++++++++  End ship Class
