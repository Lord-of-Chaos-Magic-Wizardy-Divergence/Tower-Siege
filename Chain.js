class Chain{
    constructor(bodyA,pointB){
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness: 0.01,
          length:50
      }
      this.pointB = pointB
      this.chain = Constraint.create(options);
      World.add(world,this.chain);
    }

    attach(body){
      this.chain.bodyA = body;
    }

    fly(){
        this.chain.bodyA = null;
    }
 
  check(){
    if(this.chain.bodyA){
      Matter.Body.setPosition(playerStone.body, {x: mouseX , y: mouseY});
    }
}
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        stroke("cyan");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
};