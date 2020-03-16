//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{
  constructor(x, y, w, c){
    this.head =createVector(x,y);
    this.vel = createVector(0,0);
    this.w = 30;
    this.clr = c;
    this.body = [];

  }// end constructor

  run(){
    this.update();
    this.render();
  } //end run

  update(){
    this.keyPressed();
   //  this.checkEdges();
     for(var i = 0; i< food.length; i++){
     if(this.head.x === food[i].loc.x &&
        this.head.y === food[i].loc.y){
          this.loadSegment();
          food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(70)));
          score++;
      }
    }
     // update the body
     for (i = this.body.length-1; i>=0; i--){
     if (i >= 1){
       this.body[i].x = this.body[i-1].x;
       this.body[i].y = this.body[i-1].y;
    }  if (i === 0){
       this.body[i].x = this.head.x;
       this.body[i].y = this.head.y;
     }
  }
    // update the head
  //this.head.add(this.vel);

}//end update

  render(){
 // render head
    fill(this.clr);
    rect(this.head.x, this.head.y, this.w, this.w);
 // render the body
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, 30, 30);
   }
 }

  loadSegment(){
    this.body.push(createVector(this.head.x, this.head.y));
  }

  tangled(){
    //for loop checking each segment in the segment array
  for(var i = 1; i < this.body.length; i++){
    //if stament checking if the headations are equal to each other
    if(this.head.x == this.body[i].x && this.head.y == this.body[i].y){
      return true;
    }
  }
  }

   keyPressed(){
     this.head.add(this.vel);
    if(keyCode === UP_ARROW){
        this.vel.x = 0;
        this.vel.y = -30;
    }
    if(keyCode === DOWN_ARROW){
      this.vel.x = 0;
      this.vel.y = 30;

  //    this.head.y = this.head.y + this.w;
      }
    if(keyCode === LEFT_ARROW){
      this.vel.y = 0;
      this.vel.x = -30;
  //  this.head.x = this.head.x - this.w;
      }
    if(keyCode === RIGHT_ARROW){
      this.vel.y = 0;
      this.vel.x = 30
  //  this.head.x = this.head.x + this.w;

      }
  }//end keyPressed

  checkEdges(){ //keep snake inside screen //doesnt work
    // if(this.head.x< 0) {this.vel. x = -this.vel.x;}
    // if (this.head.x> width) {this.vel.x = -this.vel.x;}
    // if (this.head.y < 0) {this.vel.y = - this.vel.y;}
    // if(this.head.y> height) {this.vel.y = -this.vel.y;}
    //   // if(this.head.x< 0){
      //   this.head.x + this.w
      // if (this.head.x> width) this.head.x + this.w;
      // if (this.head.y < 0) this.head.y + this.w;
      // if(this.head.y> height) this.head.y - this.w;
  }



} //++++++++++++++++ End Snake
