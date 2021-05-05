class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
   
    super.display();
    if(this.body.position.x>200 && this.body.speed >10)
    {
    var position = [this.body.position.x,this.body.position.y]
    this.trajectory.push(position);
    }
    //console.log(this.trajectory)

    for(var i=0; i<this.trajectory.length; i = i+1)
    {
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1],10,10)
    }
    
  
  }

  
}
