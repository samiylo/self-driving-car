const canvas = document.getElementById("myCanvas");
//canvas.height = window.innerHeight;
canvas.width = 400;

//Define Canvas and Car Object
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(100, 100, 30, 50);


animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}