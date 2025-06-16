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

// mia
const mia = {
  x: 248,
  y: 477,
  width: 52,
  height: 52,
  gravity: 0.5,
  lift: -7,
  velocity: 0
};

let pipes = [];
let frame = 0;
let score = 0;
let pipeSpeed = 2;

// Controls
document.addEventListener("keydown", () => {
  mia.velocity = mia.lift;
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
  const angle = Math.min(Math.PI / 4, mia.velocity * 0.1);
  ctx.rotate(angle);

  if (miaImg.complete && miaImg.naturalWidth > 0) {
    ctx.drawImage(miaImg, -mia.width / 2, -mia.height / 2, mia.width, mia.height);
  } else {
    ctx.fillStyle = "red";
    ctx.fillRect(-mia.width / 2, -mia.height / 2, mia.width, mia.height);
  }

  ctx.restore();
}

function updateMIA() {
  mia.velocity += mia.gravity;
  mia.y += mia.velocity;

  if (mia.y + mia.height > canvas.height) {
    mia.y = canvas.height - mia.height;
    mia.velocity = 0;
  }

  if (mia.y < 0) {
    mia.y = 0;
    mia.velocity = 0;
  }
}

// pipes creation
function generatePipes() {
  if (frame % 100 === 0) {
    const gap = 140;
    const topHeight = Math.floor(Math.random() * 250) + 50;

    pipes.push({
      x: canvas.width,
      topY: topHeight - 200,
      bottomY: topHeight + gap,
      passed: false
    });
  }
}

// pipes drawing ( diementions are to be fixed)
function drawPipes() {
  pipes.forEach(pipe => {
    ctx.drawImage(pipeTopImg, pipe.x, pipe.topY, 70, 200);
    ctx.drawImage(pipeBottomImg, pipe.x, pipe.bottomY, 70, 200);
  });
}

//  pipes and scoring update 
function updatePipes() {
  pipes.forEach(pipe => {
    pipe.x -= pipeSpeed;

    if (!pipe.passed && pipe.x + 70 < mia.x) {
      score++;
      pipe.passed = true;

    // Speed up after 25 points
      if (score === 25) {
        pipeSpeed = 3.5;
        mia.gravity = 0.6;
        console.log("⚡ Speed increased!");
      }
    }
  });

  pipes = pipes.filter(pipe => pipe.x + 70 > 0);
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
            y: pipe.topY + 6,
            width: pipeWidth - 12,
            height: pipeHeight - 12
        };
    
        const bottomPipe = {
            x: pipe.x + 6,
            y: pipe.bottomY + 6,
            width: pipeWidth - 12,
            height: pipeHeight - 12
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
            alert("💥 Game Over!\nYour Score: " + score);
            document.location.reload();
        }
    });
}

// Display score and speed-up message 
   //to be replaced later with other pages display
function drawScore() {
  ctx.fillStyle = "#fff";
  ctx.font = "30px Arial";
  ctx.fillText("SCORE: " + score, 20, 50);

  if (score >= 25) {
    ctx.font = "20px Arial";
    ctx.fillText("⚡ Speed Up!", 20, 80);
  }
}

// Main 
function animate() {
  drawBackground();
  drawPipes();
  drawMIA();
  drawScore();

  updateMIA();
  generatePipes();
  updatePipes();
  checkCollision();

  frame++;
  requestAnimationFrame(animate);
}

animate();
