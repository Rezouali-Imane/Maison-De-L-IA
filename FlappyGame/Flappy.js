// ===============================================================
// Flappy Mia Game - Core JavaScript Logic
// ===============================================================

// --- DOM Element References ---
const miaCharacter = document.getElementById("mia-character");
const gameContainer = document.getElementById("game-container");
const gameGround = document.getElementById("game-ground");

// --- Game State Variables ---
let miaY = 200; // Mia's current vertical position
let miaVelocity = 0; // Mia's current vertical speed and direction
let backgroundPositionX = 0; // For horizontal scrolling of background/ground
const activePipes = []; // Stores all currently visible pipe obstacles

// --- Game Constants (Tunable) ---
const FLAP_STRENGTH = 20; // Upward force when Mia flaps
const GRAVITY = 1; // Downward acceleration rate
const PIPE_SPEED = 2; // Horizontal speed of pipes (pixels per frame)
const PIPE_VERTICAL_GAP_VH = 10; // Vertical gap size between top and bottom pipes (in vh)
const PIPE_WIDTH_PX = 50; // Width of the pipe sprites (in pixels)

// ===============================================================
// Core Game Loop
// Updates game state and visuals in each animation frame.
// ===============================================================
function gameLoop() {
    // Mia's vertical movement based on gravity
    miaVelocity += GRAVITY;
    miaY += miaVelocity;
    miaCharacter.style.top = miaY + `px`;

    // Background/Ground Scrolling
    backgroundPositionX -= 5; // Scroll speed for ground/background
    gameGround.style.backgroundPositionX = backgroundPositionX + `px`;

    // Pipe Movement and Removal Logic
    const pipesToKeep = []; // Temporarily holds pipes that are still on screen
    for (let i = 0; i < activePipes.length; i++) {
        const pipe = activePipes[i];

        // Move pipe horizontally to the left
        pipe.xPosition -= PIPE_SPEED;
        pipe.topElement.style.left = pipe.xPosition + `px`;
        pipe.bottomElement.style.left = pipe.xPosition + `px`;

        // Remove pipe if it's completely off-screen
        if (pipe.xPosition + PIPE_WIDTH_PX <= 0) {
            pipe.topElement.remove(); // Remove HTML element from DOM
            pipe.bottomElement.remove(); // Remove HTML element from DOM
        } else {
            pipesToKeep.push(pipe); // Keep pipe if still visible
        }
    }
    // Update activePipes array to remove off-screen pipes
    activePipes.splice(0, activePipes.length, ...pipesToKeep);

    requestAnimationFrame(gameLoop); // Request next animation frame
}

// ===============================================================
// Utility Functions
// ===============================================================

// Mia's flap/jump action
function flop() {
    miaVelocity = -FLAP_STRENGTH; // Sets upward velocity
}

// Creates a new pair of top and bottom pipe obstacles
function createPipe() {
    // Initial horizontal position for new pipes, off-screen to the right
    const pipePositionX = gameContainer.clientWidth + 50;

    // Top Pipe
    let topPipeHeight = getRandomInt(5, 75); // Random height in vh
    let topPipe = document.createElement("img");
    topPipe.src = "./images/pipeDown.png";
    topPipe.className = "pipe top-pipe";
    gameContainer.appendChild(topPipe);
    topPipe.style.height = topPipeHeight + 'vh';
    topPipe.style.top = "0vh"; // Anchored to top
    topPipe.style.left = pipePositionX + "px";

    // Bottom Pipe
    // Height calculated based on total height (100vh), top pipe, and fixed gap
    let bottomPipeHeight = 100 - topPipeHeight - PIPE_VERTICAL_GAP_VH;
    let bottomPipe = document.createElement("img");
    bottomPipe.src = "./images/pipeUP.png";
    bottomPipe.className = "pipe bottom-pipe";
    gameContainer.appendChild(bottomPipe);
    bottomPipe.style.height = bottomPipeHeight + "vh";
    bottomPipe.style.top = (topPipeHeight + PIPE_VERTICAL_GAP_VH) + "vh"; // Positioned after top pipe + gap
    bottomPipe.style.left = pipePositionX + "px";

    // Store references and position for movement
    activePipes.push({
        topElement: topPipe,
        bottomElement: bottomPipe,
        xPosition: pipePositionX
    });
}

// Generates a random integer within a specified range
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// ===============================================================
// Game Initialization
// ===============================================================

// Start continuous pipe generation
const pipeGenerationIntervalID = setInterval(createPipe, 2000);

// Initiate the main game loop
gameLoop();