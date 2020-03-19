//  Ziggy Sheynin
//Create Task 2020
////  This is a comment
//  The setup function function is called once when your program begins

class Button{
  constructor(x, y, w, h, clr){ //constructor for what every button has
    this.loc = createVector(x,y);
    this.w = w;
    this.h = h;
    this.clr = clr;
    //this.txtSize = textSize();
  }

  run(){ //calls both functions in thi class
    this.render();
    this.isClicked();
  }
  render(){ //draws the button on the screen
    fill(this.clr)
    rect(this.loc.x, this.loc.y, this.w, this.h);
    // textSize(this.txtSize);
  }

  isClicked(){ //for all buttons, what to do if they are pressed
    if(mouseIsPressed&&
    mouseX > this.loc.x&&
    mouseX < this.loc.x+this.w &&
    mouseY > this.loc.y&&
    mouseY < this.loc.y +this.h){
      return true;
    }
  }
}
