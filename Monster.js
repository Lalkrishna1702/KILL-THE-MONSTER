class Monster{
    constructor(x,y,w,h){

        var options = {
            isStatic: false,
            restitution:0.8,
            friction:1.0,
            density:20
        }
        
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);

        this.image = loadImage("images/Monster-01.png");
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