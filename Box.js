class Box{
    constructor(x,y,width,height,r,g,stat){
      var options = {
         restitution: 0,
         'friction':0.3,
         'density':1.0,
         isStatic:stat
      }
        this.r = r;
        this.g = g;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill(this.r,this.g,0);
        rect(pos.x, pos.y, this.width,this.height);
        pop();
    }
};