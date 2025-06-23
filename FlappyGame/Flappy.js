const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

// Load assets
const miaImg = new Image();
miaImg.src = "images/FlyingMia.png";

const pipeTopImg = new Image();
pipeTopImg.src = "images/pipeDown.png";

const pipeBottomImg = new Image();
pipeBottomImg.src = "images/pipeUp.png";

const groundImg = new Image();
groundImg.src = "./images/ground1.png";

let gameRunning = true; // NEW: Flag to control game state

groundImg.onload = function () {
    ground.width = (groundImg.naturalWidth / groundImg.naturalHeight) * ground.height;
    ground.y = canvas.height - ground.height;
    ground.x = 0;
    ground.speed = pipeSpeed;
}
// mia
const mia = {
    x: 248,
    y: 274,
    width: 52,
    height: 52,
    gravity: 1000,
    lift: -300,
    velocity: 0
};

let pipes = [];
let frame = 0;
let score = 0;
let pipeSpeed = 150;

let ground = {
    height: 80,
    speed: pipeSpeed
}

// Global variable for pipe generation timer
let pipeGenerationTimer = 0;
const PIPE_GEN_INTERVAL_SECONDS = 1.66;

// Controls
document.addEventListener("keydown", () => {
    if (gameRunning) { // Only allow flapping if game is running
        mia.velocity = mia.lift;
    }
});

// Background
function drawBackground() {
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Drawing mia
function drawMIA() {
    ctx.save();
    ctx.translate(mia.x + mia.width / 2, mia.y + mia.height / 2);

    // FIX: Corrected Mia's rotation logic
    const rotationFactor = 0.001;
    let angle = mia.velocity * rotationFactor;
    angle = Math.max(-Math.PI / 4, Math.min(Math.PI / 2, angle));
    ctx.rotate(angle);

    if (miaImg.complete && miaImg.naturalWidth > 0) {
        ctx.drawImage(miaImg, -mia.width / 2, -mia.height / 2, mia.width, mia.height);
    } else {
        ctx.fillStyle = "red";
        ctx.fillRect(-mia.width / 2, -mia.height / 2, mia.width, mia.height);
    }

    ctx.restore();
}

function updateMIA(deltaTime) {
    mia.velocity += mia.gravity * deltaTime;
    mia.y += mia.velocity * deltaTime;

    if (mia.y + mia.height - 24 > ground.y) {
        gameRunning = false;
        alert("💥 Game Over!\nYour Score: " + score);
        resetGame();
    }

    if (mia.y < 0) {
        mia.y = 0;
        mia.velocity = 0;
    }
}

// pipes creation
function generatePipes(deltaTime) {
    pipeGenerationTimer += deltaTime;

    if (pipeGenerationTimer >= PIPE_GEN_INTERVAL_SECONDS) {
        const gap = 140;
        const minGapYPosition = 50;
        const maxGapYPosition = ground.y - gap;
        const gapYPosition = Math.floor(Math.random() * (maxGapYPosition - minGapYPosition + 1)) + minGapYPosition;

        pipes.push({
            x: canvas.width,
            topPipeHeight: gapYPosition,
            bottomPipeY: gapYPosition + gap,
            passed: false
        });
        pipeGenerationTimer -= PIPE_GEN_INTERVAL_SECONDS;
    }
}

// pipes drawing
function drawPipes() {
    pipes.forEach(pipe => {
        const topPipeDrawHeight = pipe.topPipeHeight;
        ctx.drawImage(
            pipeTopImg,
            0,
            pipeTopImg.naturalHeight - topPipeDrawHeight,
            pipeTopImg.naturalWidth,
            topPipeDrawHeight,
            pipe.x,
            0,
            70,
            topPipeDrawHeight
        );

        const bottomPipeDrawHeight = ground.y - pipe.bottomPipeY;
        ctx.drawImage(
            pipeBottomImg,
            0,
            0,
            pipeBottomImg.naturalWidth,
            bottomPipeDrawHeight,
            pipe.x,
            pipe.bottomPipeY,
            70,
            bottomPipeDrawHeight
        );
    });
}

//  pipes and scoring update
function updatePipes(deltaTime) {
    pipes.forEach(pipe => {
        pipe.x -= pipeSpeed * deltaTime;

        if (!pipe.passed && pipe.x + 70 < mia.x) {
            score++;
            pipe.passed = true;

            if (score === 25) {
                pipeSpeed = 200;
                mia.gravity = 1200;
                console.log("⚡ Speed increased!");
            }
        }
    });

    pipes = pipes.filter(pipe => pipe.x + 70 > 0);
}

// ground drawing
function drawGround() {
    for (let i = 0; ground.x + i * ground.width < canvas.width + ground.width; i++) {
        ctx.drawImage(groundImg, ground.x + i * ground.width, ground.y, ground.width, ground.height);
    }
}

function updateGround(deltaTime) {
    ground.x -= ground.speed * deltaTime;
    if (ground.x <= -ground.width) {
        ground.x = 0;
    }
}

// collision detection
function checkCollision() {
    const pipeWidth = 70;
    const pipeHeight = 200;

    const hitbox = {
        x: mia.x + 12,
        y: mia.y + 12,
        width: mia.width - 24,
        height: mia.height - 24
    };

    pipes.forEach(pipe => {

        const topPipe = {
            x: pipe.x + 6,
            y: 0,
            width: 70,
            height: pipe.topPipeHeight
        };

        const bottomPipe = {
            x: pipe.x + 6,
            y: pipe.bottomPipeY + 6,
            width: 70,
            height: ground.y - pipe.bottomPipeY
        };


        const collideTop =
            hitbox.x < topPipe.x + topPipe.width &&
            hitbox.x + hitbox.width > topPipe.x &&
            hitbox.y < topPipe.y + topPipe.height &&
            hitbox.y + hitbox.height > topPipe.y;


        const collideBottom =
            hitbox.x < bottomPipe.x + bottomPipe.width &&
            hitbox.x + hitbox.width > bottomPipe.x &&
            hitbox.y < bottomPipe.y + bottomPipe.height &&
            hitbox.y + hitbox.height > bottomPipe.y;

        if (collideTop || collideBottom) {
            gameRunning = false;
            alert("💥 Game Over!\nYour Score: " + score);
            resetGame();
        }
    });
}

// Display score and speed-up message
function drawScore() {
    ctx.fillStyle = "#fff";
    ctx.font = "30px Arial";
    ctx.fillText("SCORE: " + score, 20, 50);

    if (score >= 25) {
        ctx.font = "20px Arial";
        ctx.fillText("⚡ Speed Up!", 20, 80);
    }
}

function resetGame() {
    mia.x = 248;
    mia.y = 274;
    mia.velocity = 0;
    pipes = [];
    frame = 0;
    score = 0;
    pipeSpeed = 150;
    mia.gravity = 1000;
    ground.x = 0;
    pipeGenerationTimer = 0;
    gameRunning = true;
}

let lastTime = 0;

// Main
function animate(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    drawBackground();
    drawGround();
    drawPipes();
    drawMIA();
    drawScore();

    if (gameRunning) {
        updateGround(deltaTime);
        updateMIA(deltaTime);
        generatePipes(deltaTime);
        updatePipes(deltaTime);
        checkCollision();
        frame++;
    }

    requestAnimationFrame(animate);
}

animate(0);