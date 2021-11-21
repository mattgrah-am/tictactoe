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
let block1 = document.getElementById("block_1");
let block2 = document.getElementById("block_2");
let block3 = document.getElementById("block_3");
let block4 = document.getElementById("block_4");
let block5 = document.getElementById("block_5");
let block6 = document.getElementById("block_6");
let block7 = document.getElementById("block_7");
let block8 = document.getElementById("block_8");
let block9 = document.getElementById("block_9");
let playerTurn = document.querySelector(".status");

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

// Main Click Function
playWindow.addEventListener("click", function (event) {
    if (event.target.innerText !== "X" && event.target.innerText !== "O") {
        clickXO(event);
    }
    winCheck(event);
});

// Set X or O Function
function clickXO(event) {
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

// Check for Win Condition
function winCheck(event) {
    currentGame.push(event.target.innerText);
    for (let index of winConditions) {
        let a = index[0];
        let b = index[1];
        let c = index[2];
        if (playWindow.children === undefined) {
            continue;
        } else if (
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
            } else if (playWindow.children[a].innerText === "O") {
                playerTurn.innerText = "Player 2's Wins";
                playerTurn.classList.add("player2");
                playerTurn.classList.remove("player1");
                playWindow.children[a].classList.add("player2_win");
                playWindow.children[b].classList.add("player2_win");
                playWindow.children[c].classList.add("player2_win");
                player2++;
                document.querySelector("#player2_score").innerText = player2;
            }
        }
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
