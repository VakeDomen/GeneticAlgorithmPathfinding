const FRAME_WIDTH = 1000;
const FRAME_HEIGHT = 800;
const POPULATION_SIZE = 500;
const GENERATION_LENGTH = 100;
const MAX_ROCKET_SPEED = 10;

let canvas;
let population;
let goal;
let barricade;

// ----------------- CORE LOOPS -----------------

function main() {
    initialize();
    simulate();
}

async function simulate() {
    while (true) {
        await simulateGeneration();
    }
}

async function simulateGeneration() {
    for (let tick = 0 ; tick < GENERATION_LENGTH ; tick++) {
        update();
        draw();
        await sleep(50);
    }
}

// ----------------- INIT -----------------
function initialize() {
    canvas      = initializeCanvas();
    population  = initializePopulation();
    goal        = initializeGoal();
    barricade   = initializeBarricade();
}

function initializeCanvas() {
    const canvas = document.getElementById("canvas");
    canvas.width = FRAME_WIDTH;
    canvas.height = FRAME_HEIGHT;
    return canvas.getContext("2d");
}

function initializePopulation() {
    const pop = new Population(
        FRAME_WIDTH / 2,
        FRAME_HEIGHT * 9 / 10
    );
    pop.generateStartingRockets();
    return pop;
}

function initializeGoal() {
    return new Goal(
        FRAME_WIDTH / 2,
        FRAME_HEIGHT / 10
    );
}

function initializeBarricade() {
    return new Barricade(
        0,
        FRAME_HEIGHT / 2,
        FRAME_WIDTH * 2 / 3,
        FRAME_HEIGHT / 20
    );
}
// ----------------- DRAW -----------------
function draw() {
    clearCanvas();
    drawGoal();
    drawBarricade();
    drawPopulation();
}

function clearCanvas() {
    canvas.fillStyle = "black";
    canvas.fillRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
}

function drawGoal() {
    goal.draw(canvas);
}

function drawBarricade() {
    barricade.draw(canvas);
}

function drawPopulation() {
    population.draw(canvas);
}

// ----------------- LOGIC -----------------
function update() {
    population.move();
    population.checkCollision();
}

// ----------------- HELPER FUNCTIONS -----------------
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}