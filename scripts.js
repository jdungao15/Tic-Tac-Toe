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
  turn = !turn;

  // Change the board state
  let idx = Number(evt.target.dataset.index);
  changeBoardState(idx);
  console.log(idx);

  // Remove Event Listener
  evt.target.removeEventListener("click", handleClick);
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

// Add event listener to reset button
const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", resetBoard);

// check for a winner
// function checkForWinner(player) {
//     // Check for winner Diagonally
//     if (player == [0][])
// }
