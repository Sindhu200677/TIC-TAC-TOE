let currentPlayer = 'X';  // Start with player X
let board = ['', '', '', '', '', '', '', '', ''];  // Empty board
let gameOver = false;  // Game status

// Function to make a move
function makeMove(index) {
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer;
        document.querySelectorAll('.cell')[index].innerText = currentPlayer;
        checkWinner();  // Check if there's a winner after this move
        if (!gameOver) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';  // Switch turns
            updateTurnMessage();  // Update the turn message
        }
    }
}

// Function to check if there is a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            showResult(`${board[a]} Wins!`);
            gameOver = true;
            return;
        }
    }

    // If there is no winner and the board is full, it's a draw
    if (!board.includes('')) {
        showResult('It\'s a Draw!');
        gameOver = true;
    }
}

// Function to display the result in the modal
function showResult(message) {
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-modal').style.display = 'flex';
}

// Function to reset the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.getElementById('turn-message').innerText = `Player ${currentPlayer}'s turn`;
    document.getElementById('result-modal').style.display = 'none'; // Close the modal
}

// Function to update the turn message
function updateTurnMessage() {
    document.getElementById('turn-message').innerText = `Player ${currentPlayer}'s turn`;
}

// Function to close the result modal
function closeModal() {
    document.getElementById('result-modal').style.display = 'none';
    resetGame();
}
