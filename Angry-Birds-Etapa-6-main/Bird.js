class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imaginatelo = loadImage("sprites/smoke.png");

    this.trajectory=[]

  }



  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

   

    if(this.body.velocity.x>10&&this.body.position.x>200){
      var position=[this.body.position.x, this.body.position.y ]
      this.trajectory.push(position)

    }
    for(var countdown=0; countdown<this.trajectory.length; countdown++){

image( this.imaginatelo, this.trajectory [countdown][0],this.trajectory [countdown][1] )

    }
  }
}
