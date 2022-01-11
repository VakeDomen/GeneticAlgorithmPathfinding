class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        if (!x && !y) {
            this.x = Math.random() * 2 - 1;
            this.y = Math.random() * 2 - 1;
        }
    }

    sum(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    capSize(maxSize) {
        const size = Math.sqrt(this.x ** 2 + this.y ** 2);
        if (size > maxSize) {
            const coeficient = maxSize / size;
            this.y *= coeficient;
            this.x *= coeficient;
        }
    }
}