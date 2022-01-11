class Rocket {
    constructor(x, y) {
        this.position   = new Vector(x, y);
        this.radius     = 3;
        this.color      = "rgb(106, 168, 166)";
        this.speed      = new Vector(0, 0);
        this.moving     = true;
    }

    draw(canvas) {
        canvas.fillStyle = this.color;
        canvas.beginPath();
        canvas.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI);
        canvas.fill();
    } 

    move() {
        if (this.moving) {
            this.speed.sum(new Vector());
            this.speed.capSize(MAX_ROCKET_SPEED);
            this.position.sum(this.speed);
        }
    }

    checkCollision() {
        // wall collision
        if (
            this.position.x < 0 ||
            this.position.y < 0 || 
            this.position.x > FRAME_WIDTH ||
            this.position.y > FRAME_HEIGHT
        ) {
            this.moving = false;
        }
        // barricade collision
        if (
            this.position.x > barricade.x &&
            this.position.x < barricade.x + barricade.width &&
            this.position.y > barricade.y &&
            this.position.y < barricade.y + barricade.height
        ) {
            this.moving = false;
        }
    }
}