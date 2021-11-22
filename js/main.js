/**
 *
 */

// Variables
let player1 = 0;
let player2 = 0;
let currentPlayer = "Player 1";
let nextPlayer = "Player 2";
let winner = false;
let symbol = "X";
let playWindow = document.querySelector(".play_window");
let resetBtn = document.getElementById("reset");
let playAgainBtn = document.getElementById("play_again");
let playerTurn = document.querySelector(".status");
let winImg = document.querySelector(".win");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let currentGame = [];

// Main Click
playWindow.addEventListener("mousedown", function (event) {
    if (!winner) {
        clickXO(event);
        winCheck(event);
        drawCheck();
    }
    return;
});

// Set X or O Function
function clickXO(event) {
    if (event.target.innerText === "") {
        return currentPlayer === "Player 1"
            ? clickPlayer("Player 1", event)
            : clickPlayer("Player 2", event);
    }
}

// function for each player styling on click.
function clickPlayer(player, event) {
    event.target.style.color = player === "Player 1" ? "hsl(355, 78%, 56%)" : "hsl(203, 39%, 44%)";
    event.target.innerText = player === "Player 1" ? "X" : "O";
    playerTurn.style.color = player === "Player 1" ? "hsl(203, 39%, 44%)" : "hsl(355, 78%, 56%)";
    currentPlayer = player === "Player 1" ? "Player 2" : "Player 1";
    playerTurn.innerText = `${currentPlayer}'s Turn`;
}

// Check for Win Condition
function winCheck(event) {
    currentGame.push(event.target.innerText);
    for (let index of winConditions) {
        let a = index[0];
        let b = index[1];
        let c = index[2];
        if (playWindow.children.length === 0) continue;
        else if (
            playWindow.children[a].innerText === playWindow.children[b].innerText &&
            playWindow.children[b].innerText === playWindow.children[c].innerText
        ) {
            if (playWindow.children[a].innerText === undefined) {
                return;
            } else if (playWindow.children[a].innerText === "X") {
                playerTurn.innerText = `Player 1 Wins`;
                playerTurn.classList.add("player1");
                playWindow.children[a].classList.add("player1");
                playWindow.children[b].classList.add("player1");
                playWindow.children[c].classList.add("player1");
                player1++;
                document.querySelector("#player1_score").innerText = player1;
                winCond();
            } else if (playWindow.children[a].innerText === "O") {
                playerTurn.innerText = `Player 2 Wins`;
                playerTurn.classList.add("player2");
                playWindow.children[a].classList.add("player2");
                playWindow.children[b].classList.add("player2");
                playWindow.children[c].classList.add("player2");
                player2++;
                document.querySelector("#player2_score").innerText = player2;
                winCond();
            }
        }
    }
}

// Function for common win conditions
function winCond() {
    winner = true;
    resetBtn.style.display = "block";
    playAgainBtn.style.display = "block";
    winImg.style.display = "block";
}

// Check of draw
function drawCheck() {
    if (currentGame.length === 9 && winner === false) {
        playerTurn.innerText = "It's a Tie!";
        playerTurn.style.color = "hsl(215, 50%, 23%)";
        resetBtn.style.display = "block";
        playAgainBtn.style.display = "block";
    }
}

// Function for both playagain and reset btn to clear board.
function boardClear() {
    item.innerText = "";
    item.classList.remove("player1", "player2");
    winner = false;
    currentGame = [];
    playerTurn.classList.remove("player1", "player2");
    playerTurn.innerText = `Begin Game`;
    playerTurn.style.color = "hsl(215, 50%, 23%)";
    resetBtn.style.display = "none";
    playAgainBtn.style.display = "none";
    winImg.style.display = "none";
}

// Play again Button (retain scores)
playAgainBtn.addEventListener("click", function () {
    for (item of playWindow.children) {
        boardClear();
    }
});

// Reset Button
resetBtn.addEventListener("click", function () {
    for (item of playWindow.children) {
        boardClear();
        document.querySelector("#player1_score").innerText = player1 = 0;
        document.querySelector("#player2_score").innerText = player2 = 0;
    }
});
