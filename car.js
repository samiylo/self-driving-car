class Car {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed=0
        this.acceleration=0.3;
        this.maxSpeed=3;
        this.friction=0.05
        this.angle=0;

        this.sensor=new Sensor(this);
        this.controls = new Controls();
    }

    update(roadBoarders) {
       this.#move();
       this.sensor.update(roadBoarders);
    }

    #move() {
        if(this.controls.forward) {
            //this.y-=2;
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse) {
            //this.y+=2;
            this.speed-=this.acceleration;
        }
        

        //Cap the max speed
        if(this.speed>this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2) {
            this.speed =- this.maxSpeed/2;
        }

        //Add Friction
        if(this.speed>0) {
            this.speed-=this.friction;
        }
        if(this.speed<0) {
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction) {
            this.speed=0;
        }

        if(this.speed!=0) {
            const flip=this.speed>0?1:-1;
        
            //Turn Car
            if(this.controls.left) {
                //this.x+=2;
                this.angle+=0.03*flip; //So when driving backwards, controls fil aswell
            }
            if(this.controls.right) {
                //this.x-=2;
                this.angle-=0.03*flip;
            }
        }

        //Fixes the Car from moving like a tank
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
        //this.y-=this.speed;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            //this.x - this.width/2,
            //this.y-this.height/2,
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );

        ctx.fill();

        ctx.restore();

        this.sensor.draw(ctx);//Car draws its own sensor.
    }
    
}