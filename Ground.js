class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
  };

  
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
     
      rect(pos.x, pos.y, this.width, this.height);
    
  }
}
