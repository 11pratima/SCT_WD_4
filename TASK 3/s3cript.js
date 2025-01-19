class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = false;
        this.gameMode = '';
        this.winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        // DOM elements
        this.cells = document.querySelectorAll('.cell');
        this.status = document.getElementById('status');
        this.resetBtn = document.getElementById('reset');
        this.pvpBtn = document.getElementById('pvp');
        this.pvcBtn = document.getElementById('pvc');

        // Event listeners
        this.cells.forEach(cell => {
            cell.addEventListener('click', () => this.handleCellClick(cell));
        });
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.pvpBtn.addEventListener('click', () => this.startGame('PVP'));
        this.pvcBtn.addEventListener('click', () => this.startGame('PVC'));
    }

    startGame(mode) {
        this.gameMode = mode;
        this.gameActive = true;
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winning-cell');
        });
        this.status.textContent = "X's turn";
    }

    handleCellClick(cell) {
        if (!this.gameActive) return;
        
        const index = cell.dataset.index;
        if (this.board[index] !== '') return;

        this.makeMove(index);

        if (this.gameMode === 'PVC' && this.gameActive && this.currentPlayer === 'O') {
            setTimeout(() => this.computerMove(), 500);
        }
    }

    makeMove(index) {
        this.board[index] = this.currentPlayer;
        const cell = this.cells[index];
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLowerCase());

        if (this.checkWin()) {
            this.gameActive = false;
            this.status.textContent = `${this.currentPlayer} wins!`;
            return;
        }

        if (this.checkDraw()) {
            this.gameActive = false;
            this.status.textContent = "It's a draw!";
            return;
        }

        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.status.textContent = `${this.currentPlayer}'s turn`;
    }

    computerMove() {
        // Simple AI: Look for winning move, then blocking move, then random
        let index = this.findBestMove('O') ?? // Try to win
                   this.findBestMove('X') ?? // Try to block
                   this.getRandomEmptyCell(); // Random move
        
        if (index !== null) {
            this.makeMove(index);
        }
    }

    findBestMove(player) {
        // Check each winning combination
        for (let combo of this.winningCombos) {
            let count = 0;
            let emptyIndex = null;

            for (let index of combo) {
                if (this.board[index] === player) count++;
                else if (this.board[index] === '') emptyIndex = index;
            }

            if (count === 2 && emptyIndex !== null) {
                return emptyIndex;
            }
        }
        return null;
    }

    getRandomEmptyCell() {
        const emptyCells = this.board
            .map((cell, index) => cell === '' ? index : null)
            .filter(index => index !== null);
        
        return emptyCells.length > 0 
            ? emptyCells[Math.floor(Math.random() * emptyCells.length)]
            : null;
    }

    checkWin() {
        for (let combo of this.winningCombos) {
            if (this.board[combo[0]] &&
                this.board[combo[0]] === this.board[combo[1]] &&
                this.board[combo[0]] === this.board[combo[2]]) {
                
                // Highlight winning cells
                combo.forEach(index => {
                    this.cells[index].classList.add('winning-cell');
                });
                return true;
            }
        }
        return false;
    }

    checkDraw() {
        return !this.board.includes('');
    }

    resetGame() {
        this.startGame(this.gameMode);
    }
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});
