class treeClass{
    constructor(x, y,width,height) {
        var options = {
            'restitution':0.5,
            'friction':5,
            'density':5.0,
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y,width,height,options);
        this.body.width = width;
        this.body.height = height;
        this.image=loadImage("images/tree.png");

       World.add(world, this.body);
      }

      display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,400); 
        
      }
}