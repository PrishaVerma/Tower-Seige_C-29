class Box{
    constructor(x,y,width,height){

        var options = {
            isStatic: false,
            restitution:0.04,
            friction:1.0,
            density:0.00001
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        fill("cyan");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    };

