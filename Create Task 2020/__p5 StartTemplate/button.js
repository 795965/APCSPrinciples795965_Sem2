//  Ziggy Sheynin
// 	Create Task 2020
//  This is a comment
//  The setup function function is called once when your program begins


class Button{ //button class

constructor(x, y, w, h , clr){ //constructor- decides properties of buttons
    this.loc = createVector(x,y);
    this.w= w;
    this.h = h;
    this.clr = clr;
  }

render(){ // creates button on screen when declared in sketch
  fill(this.clr);
  rect (this.loc.x, this.loc.y, this.w, this.h);
  }

isClicked(){ // to check if that button is pressed
  if (mouseIsPressed&& mouseX > this.loc.x && mouseX< this.loc.x+this.w&&
      mouseY>this.loc.y && mouseY<this.loc.y+this.h){
          return true;
  }
}

}///end button class
