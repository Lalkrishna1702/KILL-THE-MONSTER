class Hero{
    constructor(x,y,w,h){

        var options = {
            isStatic:false,
            density:1,
            frictionAir:1
        }
        
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);

        this.image = loadImage("images/Superhero-01.png");
    }
    
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}