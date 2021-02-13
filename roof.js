class Roof {
    constructor(x,y,w,h){
        var opt={
            isStatic: true
          
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,opt);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("yellow");
        noStroke;
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}

