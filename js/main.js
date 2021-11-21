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
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

// Main Click Function
playWindow.addEventListener("click", function (event) {
    if (event.target.innerText !== "X" && event.target.innerText !== "O") {
        clickXO(event);
    }
    winCheck();
});

// Set X or O Function
function clickXO(event) {
    if (currentPlayer === "p1") {
        currentPlayer = "p2";
        event.target.classList.add("player1");
        event.target.innerText = "X";
        playerTurn.classList.add("player2");
        playerTurn.classList.remove("player1");
        playerTurn.innerText = "Player 2's Turn";
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
function winCheck() {
    if (block1.innerText === block2.innerText && block2.innerText === block3.innerText) {
        if (currentPlayer !== "p1") {
            playerTurn.innerText = "Player 1's Wins";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            block1.classList.add("player1_win");
            block2.classList.add("player1_win");
            block3.classList.add("player1_win");
            player1++;
            document.querySelector("#player1_score").innerText = player1;
        } else if (currentPlayer !== "p2") {
            playerTurn.innerText = "Player 2's Wins";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            block1.classList.add("player2_win");
            block2.classList.add("player2_win");
            block3.classList.add("player2_win");
            player2++;
            document.querySelector("#player2_score").innerText = player2;
        }
    } else if (block4.innerText === block5.innerText && block5.innerText === block6.innerText) {
        if (currentPlayer !== "p1") {
            playerTurn.innerText = "Player 1's Wins";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            block4.classList.add("player1_win");
            block5.classList.add("player1_win");
            block6.classList.add("player1_win");
            player1++;
            document.querySelector("#player1_score").innerText = player1;
        } else if (currentPlayer !== "p2") {
            playerTurn.innerText = "Player 2's Wins";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            block4.classList.add("player2_win");
            block5.classList.add("player2_win");
            block6.classList.add("player2_win");
            player2++;
            document.querySelector("#player2_score").innerText = player2;
        }
    } else if (block7.innerText === block8.innerText && block8.innerText === block9.innerText) {
        if (currentPlayer !== "p1") {
            playerTurn.innerText = "Player 1's Wins";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            block7.classList.add("player1_win");
            block8.classList.add("player1_win");
            block9.classList.add("player1_win");
            player1++;
            document.querySelector("#player1_score").innerText = player1;
        } else if (currentPlayer !== "p2") {
            playerTurn.innerText = "Player 2's Wins";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            block7.classList.add("player2_win");
            block8.classList.add("player2_win");
            block9.classList.add("player2_win");
            player2++;
            document.querySelector("#player2_score").innerText = player2;
        }
    } else if (block1.innerText === block4.innerText && block4.innerText === block7.innerText) {
        if (currentPlayer !== "p1") {
            playerTurn.innerText = "Player 1's Wins";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            block1.classList.add("player1_win");
            block4.classList.add("player1_win");
            block7.classList.add("player1_win");
            player1++;
            document.querySelector("#player1_score").innerText = player1;
        } else if (currentPlayer !== "p2") {
            playerTurn.innerText = "Player 2's Wins";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            block1.classList.add("player2_win");
            block4.classList.add("player2_win");
            block7.classList.add("player2_win");
            player2++;
            document.querySelector("#player2_score").innerText = player2;
        }
    } else if (block2.innerText === block5.innerText && block5.innerText === block8.innerText) {
        if (currentPlayer !== "p1") {
            playerTurn.innerText = "Player 1's Wins";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            block2.classList.add("player1_win");
            block5.classList.add("player1_win");
            block8.classList.add("player1_win");
            player1++;
            document.querySelector("#player1_score").innerText = player1;
        } else if (currentPlayer !== "p2") {
            playerTurn.innerText = "Player 2's Wins";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            block2.classList.add("player2_win");
            block5.classList.add("player2_win");
            block8.classList.add("player2_win");
            player2++;
            document.querySelector("#player2_score").innerText = player2;
        }
    } else if (block3.innerText === block6.innerText && block6.innerText === block9.innerText) {
        if (currentPlayer !== "p1") {
            playerTurn.innerText = "Player 1's Wins";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            block3.classList.add("player1_win");
            block6.classList.add("player1_win");
            block9.classList.add("player1_win");
            player1++;
            document.querySelector("#player1_score").innerText = player1;
        } else if (currentPlayer !== "p2") {
            playerTurn.innerText = "Player 2's Wins";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            block3.classList.add("player2_win");
            block6.classList.add("player2_win");
            block9.classList.add("player2_win");
            player2++;
            document.querySelector("#player2_score").innerText = player2;
        }
    } else if (block1.innerText === block5.innerText && block5.innerText === block9.innerText) {
        if (currentPlayer !== "p1") {
            playerTurn.innerText = "Player 1's Wins";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            block1.classList.add("player1_win");
            block5.classList.add("player1_win");
            block9.classList.add("player1_win");
            player1++;
            document.querySelector("#player1_score").innerText = player1;
        } else if (currentPlayer !== "p2") {
            playerTurn.innerText = "Player 2's Wins";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            block1.classList.add("player2_win");
            block5.classList.add("player2_win");
            block9.classList.add("player2_win");
            player2++;
            document.querySelector("#player2_score").innerText = player2;
        }
    } else if (block3.innerText === block5.innerText && block5.innerText === block7.innerText) {
        if (currentPlayer !== "p1") {
            playerTurn.innerText = "Player 1's Wins";
            playerTurn.classList.add("player1");
            playerTurn.classList.remove("player2");
            block3.classList.add("player1_win");
            block5.classList.add("player1_win");
            block7.classList.add("player1_win");
            player1++;
            document.querySelector("#player1_score").innerText = player1;
        } else if (currentPlayer !== "p2") {
            playerTurn.innerText = "Player 2's Wins";
            playerTurn.classList.add("player2");
            playerTurn.classList.remove("player1");
            block3.classList.add("player2_win");
            block5.classList.add("player2_win");
            block7.classList.add("player2_win");
            player2++;
            document.querySelector("#player2_score").innerText = player2;
        }
    }
}
// Reset Button
resetBtn.addEventListener("click", function () {
    for (item in playWindow.children) {
        playWindow.children[item].innerText = item + 1;
        playWindow.children[item].classList.remove("player1_win", "player1");
        playWindow.children[item].classList.remove("player2_win", "player2");
        player1 = 0;
        player2 = 0;
        document.querySelector("#player1_score").innerText = player1;
        document.querySelector("#player2_score").innerText = player2;
    }
});

// Play again Button (retain scores)
playAgainBtn.addEventListener("click", function () {
    for (item in playWindow.children) {
        playWindow.children[item].innerText = item + 1;
        playWindow.children[item].classList.remove("player1_win", "player1");
        playWindow.children[item].classList.remove("player2_win", "player2");
    }
});
