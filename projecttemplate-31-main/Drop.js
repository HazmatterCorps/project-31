class Drop{
   constructor(x, y){
      var options = {
         restitution:0.1,
         friction:0.05 
      }
      this.rain = Bodies.circle(x, y, 3, options)
      this.radius = 3;
      World.add(world.this.rain)
   }
   updateY(){
      if(this.rain.positon.y>height){
         Matter.Body.setPosition(this.rain,{x:random(0, 400), y:random(0, 400)})
      }
   }
   showDrop(){
       fill ("blue")
       ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
   }
}