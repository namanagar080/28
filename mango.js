class Mango{
    constructor(x,y,radius){
        var boxOptions={
            isStatic:true,
            restitution:0,
            friction:1       
        }
        
        this.body=Bodies.circle(x,y,radius/2,boxOptions);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image = loadImage("Plucking mangoes/mango.png");
    }

    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        //ellipseMode(CENTER);
        //ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
       pop();
    }
}