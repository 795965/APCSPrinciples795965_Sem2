//  Ziggy Sheynin
// 	Create Task 2020
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{ //class snake
  constructor(x, y, w, c){ //constructor for snkae objects
    this.head =createVector(x,y);
    this.vel = createVector(0,0);
    this.w = 30;
    this.clr = c;
    this.body = [];

  }// end constructor

  run(){ //class all methods in this class
    this.update();
    this.render();
  } //end run

update(){ //updates location of snake
    this.keyPressed(); //goes to where key is pressed
    this.checkEdges();
     for(var i = 0; i< food.length; i++){ //traverses whole food array
       if(this.head.x === food[i].loc.x &&
          this.head.y === food[i].loc.y){ //if head is on food
          this.loadSegment();
          if (type === 'garden'){ //makes new food objects appear for the given theme
          food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(70)));
          score++; //if the snake hits a food object, the score increases
        }else if (type === 'forest'){
          food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(202, 237, 0)));
          score++;
        }else if(type === 'sea'){
          food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(0, 255, 229)));
          score++;
        }
      }
    }
     // update the body
     for (i = this.body.length-1; i>=0; i--){
       if (i >= 1){
         this.body[i].x = this.body[i-1].x;
         this.body[i].y = this.body[i-1].y;
       }if (i === 0){
       this.body[i].x = this.head.x;
       this.body[i].y = this.head.y;
     }
  }
}//end update

  render(){
 // render head
    fill(this.clr);
    rect(this.head.x, this.head.y, this.w, this.w);
 // render the body
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, 30, 30);
   }
 }//end render

  loadSegment(){
    this.body.push(createVector(this.head.x, this.head.y));
  } //end loadSegment

  tangled(){
    //for loop checking each segment in the segment array
  for(var i = 1; i < this.body.length; i++){
    //if stament checking if the headations are equal to each other
    if(this.head.x == this.body[i].x && this.head.y == this.body[i].y){
      return true;
    }
  }
}//end tangled

keyPressed(){ //function to move snake with arrow keys
    this.head.add(this.vel);
      if(keyCode === UP_ARROW){
        this.vel.x = 0;
        this.vel.y = -30;
      }
      if(keyCode === DOWN_ARROW){
        this.vel.x = 0;
        this.vel.y = 30;
      }
      if(keyCode === LEFT_ARROW){
        this.vel.y = 0;
        this.vel.x = -30;
      }
      if(keyCode === RIGHT_ARROW){
        this.vel.y = 0;
        this.vel.x = 30
      }
  }//end keyPressed

  checkEdges(){ //keep snake inside screen, if not, game over
    if(this.head.x< 0 || this.head.x > 600|| this.head.y < 0 || this.head.y> 600){
        gameState = 5;
    }
  }//end checkEdges
} //++++++++++++++++ End Snake
