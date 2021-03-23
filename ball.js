class ball{
    constructor(x,y){
        var options = {
            
            restitution: 0.8,
            density:1,
            friction:0.8
        }
        this.body = Bodies.circle(x,y,25,options);
        this.radius=25;
        World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       
        
        fill("orange");
        
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,25,25);
       pop();
      
    }
}