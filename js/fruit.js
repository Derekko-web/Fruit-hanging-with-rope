class Fruit{
    constructor(x, y, w, h){
        var options = {
            isStatic : false,
            resitution: 1, 
            friction: 1
        };
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, this.w, this.h, options)
        World.add(world, this.body)

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle 
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(melonImage, 0, 0, this.w, this.h)
        pop()
    }
}

  