// State
let turn = true;
let player = "X";
let tries = 9;

// Create a board
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Add event listener to each cell
const cells = document.querySelectorAll(".cell");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleClick);
  cells[i].setAttribute("data-index", i);
}

// Add event listener to reset button
const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", resetBoardUI);

/********** FUNCTIONS ****************/

// Board State
function changeBoardState(idx) {
  // 1st Row
  if (idx < 3) {
    board[0][idx] = player;
  }

  // 2nd Row
  if (idx >= 3 && idx < 6) {
    let i = idx % 3;
    board[1][i] = player;
  }
  //3rd Row
  if (idx >= 6) {
    let i = idx % 6;
    board[2][i] = player;
  }
}

// Reset Board State
function resetBoardState() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] = "";
    }
  }
  tries = 9;
}

// Function mark the board
function handleClick(evt) {
  turn ? (player = "X") : (player = "O"); // ternary operator
  evt.target.textContent = player;

  // Change Turn
  turn = !turn;


  tries--;


  // Change the board state
  changeBoardState(Number(evt.target.dataset.index));

  // Check for Winner
  if (checkForWinner(player)) {
    document.getElementById("player-label").innerHTML = `Player ${player} won!`;
    resetBoardState();
  }

  // Check for Tie
  if (tries == 0) {
    document.getElementById("player-label").innerHTML = "It's a TIE!";
  }

  // Remove Event Listener of clicked cells
  evt.target.removeEventListener("click", handleClick);
}

// Reset the board
function resetBoardUI() {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].addEventListener("click", handleClick);
  }
  // Reset Board
  resetBoardState();
  document.getElementById("player-label").textContent = "";
}



// check for a winner
function checkForWinner(player) {
  // Check for winner Diagonally
  if (player == board[0][0] && player == board[1][1] && player == board[2][2]) {
    return true;
  }
  if (player == board[0][2] && player == board[1][1] && player == board[2][0]) {
    return true;
  }

  //Check for Horizontal Winner
  for (const val of board) {
    if (player == val[0] && player == val[1] && player == val[2]) {
      return true;
    }
  }
  // Check for Vertical Winner
  for (const i in board) {
    if (player == board[0][i] && player == board[1][i] && board[2][i]) {
      return true;
    }
  }
}
