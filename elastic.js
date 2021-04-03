class Elastic{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:50,
            stiffness:0.8
        } 
       this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
       display(){
           
        if(this.rope.bodyA){
            push ();
        strokeWeight(3);
        line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y);
        pop()
    }
}

fly(){
    this.rope.bodyA=null;
}  
attach(body){
   this.rope.bodyA=body; 
}
    
}