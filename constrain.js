class constraint{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA ,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.connect= Constraint.create(options);
        World.add(world, this.connect);
        }
        display(){
            //image(this.connect1,200,20);
            //image(this.connect2,170,20);
            if(this.connect.bodyA){
                var pointA = this.connect.bodyA.position;
                var pointB = this.pointB;
                
    
                if(pointA.x<220){
                    strokeWeight(10);
                    stroke(48,22,8)
                    line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                    line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                    //image(this.connect3,pointA.x-30,pointA.y-10,15,30)
                }else{
                    strokeWeight(5);
                    stroke(48,22,8)
                    line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                    line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
                    //image(this.connect3,pointA.x+25,pointA.y-10,15,30)
    
                }
            }
        }
        
     
    }
    