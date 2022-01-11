class Population {
    constructor(x, y) {
        this.startingX = x;
        this.startingY = y;
        this.rockets = [];
    }

    generateStartingRockets() {
        for (let i = 0 ; i < POPULATION_SIZE ; i++) {
            this.rockets.push(new Rocket(this.startingX, this.startingY));
        }
    }

    draw(canvas) {
        for (const rocket of this.rockets) {
            rocket.draw(canvas);
        }
    }

    move() {
        for (const rocket of this.rockets) {
            rocket.move();
        }
    }

    checkCollision() {
        for (const rocket of this.rockets) {
            rocket.checkCollision();
        }
    }
}