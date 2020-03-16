//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Food{ //food class

constructor (x, y, clr){ //constructor that decides property of food objects
  this.loc = createVector(x,y);
  this.clr = clr;
}

run(){ //calls all methods in this class
  this.render();
  this.update();
}

render(){ //makes button appear on screen once declared in sketch
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 30, 30);
}

update(){ //remakes food when it is eaten by snake
  if(snake.head.x === this.loc.x &&
   snake.head.y === this.loc.y){ //if statement to see if snake head eats food
  this.loc.x = Math.floor(random(0,79))*30; 
  this.loc.y = Math.floor(random(0,79))*30;
}

}

}// end food class
