class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 0.1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        fill ("blue");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }

}