class Road {
    constructor(x, width, laneCount=3) {
        this.x=x;
        this.width=width;
        this.lanecount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=1000000;
        this.top=-infinity;
        this.bottom=infinity;


    }

    draw(ctx) {
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.stroke();
    }
}