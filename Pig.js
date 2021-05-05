class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visiblity=255;
    this.image = loadImage("sprites/enemy.png");
  }
display()
{
  var position = this.body.position
  if(this.body.speed>5)
  {
    World.remove(world, this.body);
    push();
    tint(255,this.visiblity);
    image(this.image,position.x,position.y,50,50)
    this.visiblity = this.visiblity - 5;
    pop();
  }
  else
  {
    super.display();
  }


}
score()
{
  if (this.visiblity > 0 && this.visiblity < 255)
  score += 5
}

}

