//  Ziggy Sheynin
//Create Task 2020
////  This is a comment
//  The setup function function is called once when your program begins

class Ball{

  constructor(x, y, dx, dy, id){//constructor for ball objects
    this.loc = createVector(x, y);
    this.vel = createVector (dx, dy);
    this.acc = createVector (0, .7);
    this.id = id;
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
  this.removeBall();
  this.score();
}

checkEdges(){ //checks the edges of the screen so the ball can do something when it arrives there
  if(this.loc.x< 0) {this.vel. x = -this.vel.x}
  if (this.loc.x> width) this.vel.x = -this.vel.x;
  if (this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y> height) this.vel.y = -this.vel.y;
}

update(){//makes the ball bounce
this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){//makes the balls show up on the screen
if (this.id%2 === 0){ //makes half balls red
    fill (250, 0, 0);
  }else if (this.id%2 === 1){ //half the balls green
    fill (0, 250, 0);
  }
  ellipse(this.loc.x, this.loc.y, 30, 30);
}

isColliding(){ //Is the ball touching the paddle
  if (this.loc.x> paddle.loc.x &&
    this.loc.x < paddle.loc.x +paddle.w &&
  this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y +paddle.h
&& this.vel.y >0){
    return true;
  } else{
    return false;
  }
}

removeBall(){ //If the ball touches the top of the paddle, it is removed
if (this.vel.y > 0 ){
  for (var i = balls.length-1; i >= 0; i--){
    if (balls[i].isColliding()){
      balls.splice(i, 1);
      return true;
    }
  }
}
}

score(){//adds points if green ball is removed and takes them away if red ball is removed
  if (this.isColliding()===true && this.id %2 === 1){
    score ++;
  }else if (this.isColliding() === true && this.id %2 ===0){
    score--;
  }
}


getID(){
  return this.id;
}


}//  +++++++++++++++++++++++++++++++++++  End Ball Class
