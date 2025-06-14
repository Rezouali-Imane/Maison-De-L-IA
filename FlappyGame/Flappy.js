const miaCharacter = document.getElementById("mia-character");
const gameContainer = document.getElementById("game-container");
const gameGround = document.getElementById("game-ground");

let miaY = 200;
let miaVelocity = 0;
let backgroundPositionX = 0;
const FLAP_STRENGTH = 20;
const GRAVITY = 1;
const activePipes =[];
const PIPE_SPEED =
function gameLoop(){
    miaVelocity += GRAVITY;
    miaY += miaVelocity;
    miaCharacter.style.top = miaY + `px`;
    backgroundPositionX -= 5;
    gameGround.style.backgroundPositionX = backgroundPositionX + `px`;

    requestAnimationFrame(gameLoop);
}

//Temp func for some tests
function flop(){
    miaVelocity = -FLAP_STRENGTH;
}

function createPipe(){
    const pipePositionX = gameContainer.clientWidth + 50;
    //Working on top Pipe
    let topPipeHeight = getRandomInt(5, 75);
    let topPipe = document.createElement("div");
    topPipe.className = "pipe top-pipe";
    gameContainer.appendChild(topPipe);
    topPipe.style.height = topPipeHeight + 'vh';
    topPipe.style.top = "0vh";
    topPipe.style.left = pipePositionX + "px";
    //Working on bottom pipe
    let bottomPipeHeight = 100 - topPipeHeight - 10;
    let bottomPipe = document.createElement("div");
    bottomPipe.className = " pipe bottom-pipe";
    gameContainer.appendChild(bottomPipe);
    bottomPipe.style.height = bottomPipeHeight + "vh";
    bottomPipe.style.top = topPipeHeight + 10 + "vh";
    bottomPipe.style.left = pipePositionX + "px";

    activePipes.push(
        {
            topElement: topPipe,
            bottomElement: bottomPipe,
            xPosition: pipePositionX
        }
    )
}

const pipeGenerationIntervalID = setInterval(createPipe, 1000)

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

gameLoop();

