
//!board
let tileSize = 32;
let rows = 16;
let cols = 16;

let board ;
let boardWidth = cols * tileSize;
let boardHeight = rows * tileSize;
let context;
//!mia spaceship
let shipWidth = tileSize * 2;
let shipHeight = tileSize;
let ship = {
    x: tileSize * cols / 2 - shipWidth / 2,
    y: tileSize * rows - shipHeight
};


  let shipImg;
  let shipVelocityX = tileSize;

  //!aliens
  let alienArray = []; 
  let alienWidth = tileSize * 2;
  let alienHeight = tileSize;
  let alienX = tileSize;
  let alienY = tileSize;
  let alienImg;

  let alienRows = 3;
  let alienCols = 2;
  let alienCount = 0;
  let alienvelocityX = 1;

  //!bullets
  bulletArray = [];
  bulletVelocityY = 10;

  //!keeping track 
  let score = 0;
  let gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;  
    board.height = boardHeight;
    context = board.getContext("2d");

  
    shipImg = new Image();
    shipImg.src = "./MiaSpaceship.png"; 
    shipImg.onload = function() {
        context.drawImage(shipImg, ship.x, ship.y, shipWidth, shipHeight);
};


    alienImg = new Image();
    alienImg.src = "./alien.png";
    createAliens();
    




 requestAnimationFrame(update);
 document.addEventListener("keydown", moveShip);
 document.addEventListener("keyup", shoot);

 document.addEventListener("keydown", function(e) {
    if (gameOver && e.code === "Enter") {
        restartGame();
    }
});
};   

function update(){
    requestAnimationFrame(update);
if(gameOver){
    context.fillStyle = "rgba(0,0,0,0.7)";
        context.fillRect(0, 0, boardWidth, boardHeight);

        context.fillStyle = "white";
        context.font = "48px SilkScreen";
        context.textAlign = "center";
        context.fillText("GAME OVER", boardWidth/2, boardHeight/2);

        context.font = "24px SilkScreen";
        context.fillText("Score: " + score, boardWidth/2, boardHeight/2 + 50);

        context.font = "20px SilkScreen";
        context.fillText("Press Enter to Restart", boardWidth/2, boardHeight/2 + 100);

    return;
}

    context.clearRect(0, 0, boardWidth, boardHeight);
//!ship
    context.drawImage(shipImg, ship.x, ship.y, shipWidth, shipHeight);
//!aliens
for(let m=0; m<alienArray.length; m++){
    let alien = alienArray[m];
     if(alien.alive){
        alien.x += alienvelocityX;

        if(alien.x + alienWidth >= boardWidth || alien.x <= 0){
            alienvelocityX *= -1;
            alien.x += alienvelocityX*2;

            for(let n=0; n<alienArray.length; n++){
                alienArray[n].y += alienHeight;
            }
        }
        context.drawImage(alien.Img, alien.x, alien.y, alien.width, alien.height);
        if(alien.y >= ship.y){
            gameOver= true;
        }
}    
}
//!shooting
for(let q=0; bulletArray.length > q; q++){ 
    let bullet = bulletArray[q];
    bullet.y -= bulletVelocityY;
    context.fillStyle = "#FDD182";
    context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);


    for(let p=0; alienArray.length > p; p++){
        let alien = alienArray[p];
        if(!bullet.used && alien.alive && collisionDetection(bullet, alien)){
            bullet.used = true;
            alien.alive = false;
            alienCount--;
            score += 10;
        }
    }
}

//!clearing bullets
while(bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y<0)){
    bulletArray.shift();
}

//!leveling up
if(alienCount == 0){
    alienCols= Math.min(alienCols + 1, cols/2 - 2); //!16/2-2 = 6 columns max of aliens
    alienRows = Math.min(alienRows + 1, rows-4); //!16-4 = 12 rows max of aliens
    alienvelocityX += 0.2;
    alienArray = [];
    bulletArray = [];
    createAliens();
}

//!scoring
context.fillStyle = "white";
context.font = "16px SilkScreen";
context.fillText("Score:"+score,5, 20);
}





function moveShip(h){
  if(gameOver){
    return;
  }
  if(h.code == "ArrowLeft" && ship.x - shipVelocityX >= 0){
    ship.x -= shipVelocityX;
  }else if(h.code == "ArrowRight" && ship.x + shipVelocityX + shipWidth <= boardWidth){
    ship.x += shipVelocityX;
  }
} 

function createAliens(){
    for(let i=0; i < alienRows; i++){
        for(let j=0; j < alienCols; j++){
            let alien = {
                Img: alienImg,
                x: alienX + i * alienWidth,
                y: alienY + j * alienHeight,
                width: alienWidth,
                height: alienHeight,
                alive: true
            }
            alienArray.push(alien);
        }
        
    }
    alienCount = alienArray.length;

};

function shoot(h){
    if(gameOver){
        return;
    }
    if(h.code == "Space"){
        let bullet ={
            x: ship.x + shipWidth*15/32,
            y: ship.y,
            width: tileSize / 8,
            height: tileSize / 2,
            shooted: false
        }
        bulletArray.push(bullet);
        
    }
   
}

function collisionDetection(a,b){
    return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;

}

function restartGame() {
    ship.x = tileSize * cols / 2 - shipWidth / 2;
    ship.y = tileSize * rows - shipHeight;
    alienRows = 3;
    alienCols = 2;
    alienvelocityX = 1;
    alienArray = [];
    bulletArray = [];
    score = 0;
    gameOver = false;
    createAliens();
}