//  First Constructor Function
// eettlin
// March 10, 2020

class Ball{
 //  Ball Properties  +++++++++++++++++++++++++++++++++++++++++++++
 constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.016);
    this.clr = this.getColor();//random(255), random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
 }

 getColor(){

 }

 run(){
   this.checkEdges();
   this.removeBall();
 }


  checkEdges(){//+++++++++++++++++++++++++++++++++++++++++++++++++++
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height-2;
    }
     this.update();
  } //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  isColliding(){
    if(this.id<0){
      if(this.loc.x > paddle.loc.x - paddle.w/2 && this.loc.x < paddle.loc.x + paddle.w/2 && this.loc.y > paddle.loc.y - paddle.h/2 && this.loc.y < paddle.loc.y + paddle.h/2){
          return true
      }
    }else if (this.id%2 === 0) {
      if(this.loc.x > paddle.loc.x - paddle.w/2 && this.loc.x < paddle.loc.x + paddle.w/2 && this.loc.y > paddle.loc.y - paddle.h/2 && this.loc.y < paddle.loc.y + paddle.h/2 && this.vel.y<0){
          return true
      }
    }else {
      if(this.loc.x > paddle.loc.x - paddle.w/2 && this.loc.x < paddle.loc.x + paddle.w/2 && this.loc.y > paddle.loc.y - paddle.h/2 && this.loc.y < paddle.loc.y + paddle.h/2 && this.vel.y>0){
          return true
      }
    }
   }//checks if the ball is colliding with the paddle
// isColliding(){ //Is the ball touching the paddle
//   if(this.id%2 === 0 ){ //for green balls
//
//   if (
//     this.loc.x> paddle.loc.x &&
//     this.loc.x < paddle.loc.x + paddle.w &&
//     this.loc.y > paddle.loc.y &&
//     this.loc.y < paddle.loc.y + paddle.h &&
//     this.vel.y > 0){
//       return true;
//     } else {
//       return false;
//     }
//   }
//
//   if(this.id%2!== 0){ //for red balls
//     //bottom
//   if (
//     this.loc.x>paddle.loc.x &&
//     this.loc.x < paddle.loc.x + paddle.w &&
//     this.loc.y < paddle.loc.y &&
//     this.loc.y > paddle.loc.y + paddle.h &&
//     this.vel.y <0){
//       return true;
//     } else{
//       return false;
//     }
//   }
// } //end isColliding

removeBall(){ //If the ball touches the top of the paddle, it is removed
  for(var i = balls.length-1; i>=0; i--){
      if(balls[i].isColliding()){
        balls.splice(i, 1);
      }
    }
    if(mainBall.isColliding()){
      gameState = 1
    }
  }


  update(){//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var distToMainBall;
    if(this.id >= 0){//  if not mainBall
    }
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.render();
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 render(){
  //  **************************************************************
   if(this.id < 0){
    fill(0,0,250);
  }else if(this.id%2 === 0){
    fill(0,255,0);
   }else{
    fill(255,0,0);
   }
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
 }//***************************************************************
}//  end Ball class
