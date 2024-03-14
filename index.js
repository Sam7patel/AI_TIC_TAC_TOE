/*let board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
let currentPlayer = "X";
let gameOver = false;

// Function to initialize the game board
function initializeBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = "";
        cell.addEventListener('click', handleCellClick);
    });
}

// Function to handle cell click event
function handleCellClick(event) {
    const cellIndex = event.target.id.split("-")[1];
    if (board[cellIndex] === "-" && !gameOver) {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkGameStatus();
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        if (!gameOver && currentPlayer === "O") {
            setTimeout(AIMove, 500);
        }
    }
}

// Function to check game status
function checkGameStatus() {
    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        if (winner === "X") {
            document.getElementById('status').textContent = "You win!";
        } else if (winner === "O") {
            document.getElementById('status').textContent = "AI wins!";
        } else {
            document.getElementById('status').textContent = "It's a tie!";
        }
        return;
    }
    if (board.every(cell => cell !== "-")) {
        gameOver = true;
        document.getElementById('status').textContent = "It's a tie!";
    }
}

// Function to check for a winner
function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] !== "-" && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

// Function for AI move
function AIMove() {
    // Check for winning move for AI
    for (let i = 0; i < 9; i++) {
        if (board[i] === "-") {
            board[i] = "O";
            if (checkWinner() === "O") {
                document.getElementById(`cell-${i}`).textContent = "O";
                currentPlayer = "X";
                checkGameStatus();
                return;
            }
            board[i] = "-";
        }
    }

    // Check for blocking move for the player
    for (let i = 0; i < 9; i++) {
        if (board[i] === "-") {
            board[i] = "X";
            if (checkWinner() === "X") {
                board[i] = "O";
                document.getElementById(`cell-${i}`).textContent = "O";
                currentPlayer = "X";
                checkGameStatus();
                return;
            }
            board[i] = "-";
        }
    }

    // Choose a random move if no winning or blocking move
    const availableMoves = board.reduce((acc, cell, index) => {
        if (cell === "-") {
            acc.push(index);
        }
        return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const move = availableMoves[randomIndex];
    board[move] = currentPlayer;
    document.getElementById(`cell-${move}`).textContent = currentPlayer;
    checkGameStatus();
    currentPlayer = "X";
}

// Function to reset the game
function resetGame() {
    board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    currentPlayer = "X";
    gameOver = false;
    document.getElementById('status').textContent = "";
    initializeBoard();
}

// Initialize the game board
initializeBoard();

let board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
let currentPlayer = "X";
let gameOver = false;

// Function to initialize the game board
function initializeBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = "";
        cell.addEventListener('click', handleCellClick);
    });
}

// Function to handle cell click event
function handleCellClick(event) {
    const cellIndex = event.target.id.split("-")[1];
    if (board[cellIndex] === "-" && !gameOver) {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkGameStatus();
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        if (!gameOver && currentPlayer === "O") {
            setTimeout(AIMove, 500);
        }
    }
}

// Function to check game status
function checkGameStatus() {
    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        if (winner === "X") {
            document.getElementById('status').textContent = "You win!";
        } else if (winner === "O") {
            document.getElementById('status').textContent = "AI wins!";
        } else {
            document.getElementById('status').textContent = "It's a tie!";
        }
        return;
    }
    if (board.every(cell => cell !== "-")) {
        gameOver = true;
        document.getElementById('status').textContent = "It's a tie!";
    }
}

// Function to check for a winner
function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] !== "-" && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

// Function for AI move
function AIMove() {
    // Check for winning move for AI
    for (let i = 0; i < 9; i++) {
        if (board[i] === "-") {
            board[i] = "O";
            if (checkWinner() === "O") {
                document.getElementById(`cell-${i}`).textContent = "O";
                currentPlayer = "X";
                checkGameStatus();
                return;
            }
            board[i] = "-";
        }
    }

    // Check for blocking move for the player
    for (let i = 0; i < 9; i++) {
        if (board[i] === "-") {
            board[i] = "X";
            if (checkWinner() === "X") {
                board[i] = "O";
                document.getElementById(`cell-${i}`).textContent = "O";
                currentPlayer = "X";
                checkGameStatus();
                return;
            }
            board[i] = "-";
        }
    }

    // Choose a random move if no winning or blocking move
    const availableMoves = board.reduce((acc, cell, index) => {
        if (cell === "-") {
            acc.push(index);
        }
        return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const move = availableMoves[randomIndex];
    board[move] = currentPlayer;
    document.getElementById(`cell-${move}`).textContent = currentPlayer;
    checkGameStatus();
    currentPlayer = "X";
}

// Function to reset the game
function resetGame() {
    board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    currentPlayer = "X";
    gameOver = false;
    document.getElementById('status').textContent = "";
    initializeBoard();
}

// Initialize the game board
initializeBoard();
*/

let board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
let currentPlayer = "X";
let gameOver = false;

// Function to initialize the game board
function initializeBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = "";
        cell.addEventListener('click', handleCellClick);
    });
}

// Function to handle cell click event
function handleCellClick(event) {
    const cellIndex = event.target.id.split("-")[1];
    if (board[cellIndex] === "-" && !gameOver) {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkGameStatus();
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        if (!gameOver && currentPlayer === "O") {
            setTimeout(AIMove, 500);
        }
    }
}

// Function to check game status
function checkGameStatus() {
    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        if (winner === "X") {
            document.getElementById('status').textContent = "You win!";
        } else if (winner === "O") {
            document.getElementById('status').textContent = "AI wins!";
        } else {
            document.getElementById('status').textContent = "It's a tie!";
        }
        return;
    }
    if (board.every(cell => cell !== "-")) {
        gameOver = true;
        document.getElementById('status').textContent = "It's a tie!";
    }
}

// Function to check for a winner
function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] !== "-" && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

// Function for AI move
function AIMove() {
    let bestMove = -1;
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
        if (board[i] === "-") {
            board[i] = "O";
            let score = minimax(board, 0, false);
            board[i] = "-";
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    board[bestMove] = "O";
    document.getElementById(`cell-${bestMove}`).textContent = "O";
    checkGameStatus();
    currentPlayer = "X";
}

// Minimax function for AI decision making
function minimax(board, depth, isMaximizing) {
    const winner = checkWinner();
    if (winner === "X") {
        return -10 + depth;
    } else if (winner === "O") {
        return 10 - depth;
    } else if (board.every(cell => cell !== "-")) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "-") {
                board[i] = "O";
                let score = minimax(board, depth + 1, false);
                board[i] = "-";
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "-") {
                board[i] = "X";
                let score = minimax(board, depth + 1, true);
                board[i] = "-";
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Function to reset the game
function resetGame() {
    board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    currentPlayer = "X";
    gameOver = false;
    document.getElementById('status').textContent = "";
    initializeBoard();
}

// Initialize the game board
initializeBoard();

