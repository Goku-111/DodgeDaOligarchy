const player = document.getElementById("player");
const shiba = document.getElementById("shiba");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

let playerPos = { x: 135, y: 450 };
let shibaPos = { x: Math.random() * 270, y: 0 };
let score = 0;
let gameInterval;
let shibaSpeed = 2;
let isGameOver = false;

// Movement controls
document.addEventListener("keydown", (e) => {
  if (isGameOver) retpt
urn;

  if (e.key === "ArrowLeft" && playerPos.x > 0) {
    playerPos.x -= 10;
  } else if (e.key === "ArrowRight" && playerPos.x < 270) {
    playerPos.x += 10;
  }
  player.style.left = `${playerPos.x}px`;
});

// Update game loop
function updateGame() {
  if (isGameOver) return;

  // Move Shiba down
  shibaPos.y += shibaSpeed;
  if (shibaPos.y > 500) {
    shibaPos.y = 0;
    shibaPos.x = Math.random() * 270;
    score++;
    shibaSpeed += 0.1; // Increase difficulty
  }
  shiba.style.top = `${shibaPos.y}px`;
  shiba.style.left = `${shibaPos.x}px`;

  // Collision detection
  if (
    playerPos.x < shibaPos.x + 30 &&
    playerPos.x + 30 > shibaPos.x &&
    playerPos.y < shibaPos.y + 30 &&
    playerPos.y + 30 > shibaPos.y
  ) {
    endGame();
  }

  // Update score
  scoreDisplay.textContent = `Score: ${score}`;
}

// End game logic
function endGame() {
  isGameOver = true;
  clearInterval(gameInterval);
  scoreDisplay.textContent = `Game Over! Final Score: ${score}`;
  restartBtn.style.display = "block";
}

// Restart game
function restartGame() {
  playerPos = { x: 135, y: 450 };
  shibaPos = { x: Math.random() * 270, y: 0 };
  score = 0;
  shibaSpeed = 2;
  isGameOver = false;

  player.style.left = `${playerPos.x}px`;
  shiba.style.top = `${shibaPos.y}px`;
  shiba.style.left = `${shibaPos.x}px`;
  scoreDisplay.textContent = `Score: ${score}`;
  restartBtn.style.display = "none";

  gameInterval = setInterval(updateGame, 20);
}

// Start the game
restartGame();
