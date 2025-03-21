const symbols = ['🍎', '🍌', '🍒', '🍇', '🍎', '🍌', '🍒', '🍇', '🍋', '🍉', '🍍', '🥝', '🍋', '🍉', '🍍', '🥝'];
let shuffledSymbols = symbols.sort(() => Math.random() - 0.5);
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0; // Track matched pairs

function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = '';
    shuffledSymbols.forEach(symbol => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
    matchedPairs = 0; // Reset matched pairs at the start of the game.
}

function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.textContent = this.dataset.symbol;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        resetSelection();
        matchedPairs++; // Increment matched pairs.
        checkCompletion(); // Check if the game is complete.
    } else {
        setTimeout(() => {
            firstCard.textContent = "";
            secondCard.textContent = "";
            resetSelection();
        }, 1000);
    }
}

function resetSelection() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function resetGame() {
    shuffledSymbols = symbols.sort(() => Math.random() - 0.5);
    createBoard();
}

function checkCompletion() {
    if (matchedPairs === symbols.length / 2) {
        alert("Yay! You Successfully Completed!"); // Display completion message.
    }
}

createBoard();