class Slingshot 
{
   constructor (body1,point2)
   {
    var options =
    {
       bodyA: body1,
       pointB: point2,
       stiffness: 0.1,
       length: 1

    }

    this.slingshot = Constraint.create (options);
    this.sling1 = loadImage("sprites/sling1.png")
    this.sling2 = loadImage("sprites/sling2.png")
    this.sling3 = loadImage("sprites/sling3.png")
    World.add(world,this.slingshot);
   }

    display()
    {
       image(this.sling1,220,72,50,150)
       image(this.sling2,185,73,50,85)
      if (this.slingshot.bodyA)
      {
         var body1pos = this.slingshot.bodyA.position;
         var body2pos = this.slingshot.pointB;
         push();
       if(body1pos.x<300)
       {
          stroke("#301608")
          strokeWeight(7)
         line(body1pos.x-15, body1pos.y,body2pos.x-30,body2pos.y);
         line(body1pos.x+20, body1pos.y,body2pos.x+30,body2pos.y); 
       }
       else{
         stroke("#301608")
         strokeWeight(2)
         line(body1pos.x-15, body1pos.y,body2pos.x-30,body2pos.y);
         line(body1pos.x+20, body1pos.y,body2pos.x+30,body2pos.y); 
       }
   pop();
      }
     
    }

      

    fly()
    {
      Matter.Body.applyForce(this.slingshot.bodyA,this.slingshot.bodyA.position,{x:1000,y:10})
      this.slingshot.bodyA = null;
    }

    attach(body1)
    {
      this.slingshot.bodyA = body1 
    }
}