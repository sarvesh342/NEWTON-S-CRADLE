class Bob {
    constructor(x,y,radius) {
 
     var options = {
     isStatic:false,
 
     'restitution':1.2,
     'friction':0.9,
     'density':1
 
     }
     
     
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius
 
    World.add(world, this.body);
 }
  display(){
      ellipseMode(RADIUS);
      fill(rgb(226, 178, 237));
      strokeWeight(4);
      circle(this.body.position.x,this.body.position.y,this.radius);
  }
 
 
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 