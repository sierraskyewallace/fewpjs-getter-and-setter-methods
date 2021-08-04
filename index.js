// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius;
  }
  get diameter(){
    let diameter = this.radius * 2
    return diameter
  }
  get circumference(){
    let circumference = Math.PI * this.diameter
    return circumference
  }
  get area(){
    let area = Math.PI * (this.radius * this.radius)
    return area
  }
  set circumference( circumference ) {
    this.radius = circumference / ( Math.PI * 2 )
  }
  set area( area ) {
    this.radius = Math.sqrt( area / Math.PI )
  }
  set diameter( diameter ) {
    this.radius = diameter / 2
  }
}
