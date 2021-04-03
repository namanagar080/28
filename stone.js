class Stone{
    constructor(x,y,radius){
        var boxOptions={
            restitution:0,
            friction:1,
            density:1.2        
        }
        
        this.body=Bodies.circle(x,y,radius/2,boxOptions);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image = loadImage("Plucking mangoes/stone.png");
    }

    display(){
        var angle=this.body.angle;
        push();
        fill("red");
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        //ellipseMode(CENTER);
        //ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
       pop();
    }
} 