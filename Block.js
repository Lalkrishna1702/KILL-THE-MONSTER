class Block{
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.8,
        friction:1.0,
        density:20
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){

    var pos = this.body.position;
    var angle = this.body.position;

    push();
    translate(pos.x, pos.y)
    strokeWeight(5);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
  }
}; 