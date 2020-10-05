class Bird extends BaseClass{
  constructor(x,y){
    // super is the constructor of BaseClass/Parent
    // We are trying to access BaseClass's constructor in Bird/child
    super(x,y,50,50);

    //over written the image defined in BaseClass because we need specific image 
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    //we had to display it with mouse pointer control
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    
    //adds the defined display of Parent/BaseClass in Child/Bird
    super.display();
  }
}