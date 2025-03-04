class CircleGameObject extends GameObject{
  constructor(name){
    super(name)
  }
  start(){
    this.addComponent(new Circle("red", "pink", 1))
    this.addComponent(new SineMovement(1))
  }
}