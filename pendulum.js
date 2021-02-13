class Pendulum{
    constructor(x,y,color){
        var opt={
           restitution:1,
           friction:0,
           frictionAir:0.0,
           slop:1,
           inertia:Infinity
        };
        
        this.body = Bodies.rectangle(x,y,60,60,opt);
        this.x=x;
        this.y=y;
        this.color=color;
        World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(this.color);
        noStroke();
        rotate(angle);
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,60,60);
        pop();
    }
}