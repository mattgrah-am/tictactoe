/**
 *
 */

// Variables
let player1 = 0;
let player2 = 0;
let currentPlayer = "p1";
let playWindow = document.querySelector(".play_window");
let resetBtn = document.getElementById("reset");
let playAgainBtn = document.getElementById("play_again");
let playerTurn = document.querySelector(".status");
let winner = false;

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

const currentGame = [];

// Main Click
playWindow.addEventListener("click", function (event) {
    clickXO(event);
    winCheck(event);
    drawCheck();
});

// Set X or O Function
function clickXO(event) {
    if (event.target.innerText !== "X" && event.target.innerText !== "O") {
        if (currentPlayer === "p1") {
            event.target.classList.add("player1");
            event.target.innerText = "X";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            playerTurn.innerText = "Player 2's Turn";
            currentPlayer = "p2";
        } else if (currentPlayer === "p2") {
            event.target.classList.add("player2");
            event.target.innerText = "O";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            playerTurn.innerText = "Player 1's Turn";
            currentPlayer = "p1";
        }
    }
}

// Check for Win Condition
function winCheck(event) {
    currentGame.push(event.target.innerText);
    for (let index of winConditions) {
        let a = index[0];
        let b = index[1];
        let c = index[2];
        if (
            playWindow.children[a].innerText === playWindow.children[b].innerText &&
            playWindow.children[b].innerText === playWindow.children[c].innerText
        ) {
            if (playWindow.children[a].innerText === "X") {
                playerTurn.innerText = "Player 1's Wins";
                playerTurn.classList.add("player1");
                playerTurn.classList.remove("player2");
                playWindow.children[a].classList.add("player1_win");
                playWindow.children[b].classList.add("player1_win");
                playWindow.children[c].classList.add("player1_win");
                player1++;
                document.querySelector("#player1_score").innerText = player1;
                winner = true;
            } else if (playWindow.children[a].innerText === "O") {
                playerTurn.innerText = "Player 2's Wins";
                playerTurn.classList.add("player2");
                playerTurn.classList.remove("player1");
                playWindow.children[a].classList.add("player2_win");
                playWindow.children[b].classList.add("player2_win");
                playWindow.children[c].classList.add("player2_win");
                player2++;
                document.querySelector("#player2_score").innerText = player2;
                winner = true;
            }
        }
    }
}

// Check of draw
function drawCheck() {
    if (currentGame.length === 9 && winner === false) {
        playerTurn.innerText = "It's a Tie!";
        playerTurn.classList.remove("player1", "player2");
    }
}

// Reset Button
resetBtn.addEventListener("click", function () {
    for (item of playWindow.children) {
        item.innerText = "";
        item.classList.remove("player1_win", "player1");
        item.classList.remove("player2_win", "player2");
        player1 = 0;
        player2 = 0;
        document.querySelector("#player1_score").innerText = player1;
        document.querySelector("#player2_score").innerText = player2;
    }
});

// Play again Button (retain scores)
playAgainBtn.addEventListener("click", function () {
    for (item of playWindow.children) {
        item.innerText = "";
        item.classList.remove("player1_win", "player1");
        item.classList.remove("player2_win", "player2");
    }
});
