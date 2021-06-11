class Bob{

    constructor(x,y,radius){

        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 1,
            stiffness: 4
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        //this.image = loadImage("paper1.png");
        // this.image.style.width = this.body.width;
        // this.image.style.height= this.body.height;
        

        
        
        World.add(world,this.body);

    }

    display(){
        
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        ellipseMode(RADIUS);  
        fill("Blue");
        ellipse(0,0, this.radius,35);
        pop();


    }



};