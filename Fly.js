class Fly{
    constructor(bodyA,pointB){

        var options = {
            bodyA : bodyA,
            pointB: pointB,
            length : 500
        }
        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world,this.fly);
    }
    /*attach(body){
        this.fly.bodyA = body;
    }
    fly(){
        this.fly.bodyA = null;
    }*/
    display(){

        if(this.fly.bodyA){
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        
        push();
        stroke("#3fe0d0");
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);    
        pop();
        
        }
    }
}