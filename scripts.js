/**
 *
 * TODO:
 *  //Create a board
 *  //3x3 grid
 *  //Able to switch players
 *      -Display the current player
 *  //Place a mark on the board
 *  - Check for a winner
 *      - Display the winner
 *  - Check for a tie
 *      - Display the tie
 *  //- Reset the game
 *      //- Clear the board
 *  - 
 * 
 * 
 * 
    
 *
 *
 *
 */
// State
let turn = true;
let player = "X";

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
resetBtn.addEventListener("click", resetBoard);

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

// Function mark the board
function handleClick(evt) {
  turn ? (player = "X") : (player = "O");
  evt.target.textContent = player;

  // Change the board state
  changeBoardState(Number(evt.target.dataset.index));
  // Check for Winner
  if (checkForWinner(player)) alert(`Player ${player} won!`);

  // Remove Event Listener of clicked cells
  evt.target.removeEventListener("click", handleClick);
  //Change Turn
  turn = !turn;
}

// Reset the board
function resetBoard() {
  const cells = document.querySelectorAll(".cell");
  console.log(cells);
  console.log(cells[0].textContent);
  for (let i = 0; i < cells.length; i++) {
    // cells[i].textContent = "";
    cells[i].addEventListener("click", handleClick);
  }
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

  //Check for winner Horizontal
  for (const val of board) {
    if (player == val[0] && player == val[1] && player == val[2]) {
      return true;
    }
  }

  
}
