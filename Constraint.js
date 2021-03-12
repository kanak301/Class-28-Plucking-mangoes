class constraintClass{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.cons = Constraint.create(options);
        World.add(world, this.cons);
    }

    display(){
        var pointA = this.cons.bodyA.position;
        var pointB = this.cons.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
/*class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}*/