/**
 * TIC TAC TOE
 */

// Variables
let player1;
let player2;
let currentPlayer = "Player 1";
let winner = false;
let winAudio = new Audio("./assets/win.mp3");
const robot = `<img src="./assets/robot.png" alt="Robot" width="75%">`;
const invader = `<img src="./assets/invader.png" alt="Invader" width="75%">`;
const robotInd = document.querySelector("#robot");
const invaderInd = document.querySelector("#invader");
const playWindow = document.querySelector(".play_window");
const resetBtn = document.getElementById("reset");
const playAgainBtn = document.getElementById("play_again");
const playerTurn = document.querySelector(".status");
const winImg = document.querySelector(".win");
const playerScore1 = document.querySelector("#player1_score");
const playerScore2 = document.querySelector("#player2_score");

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

// Check if there is an existing score?
if (localStorage.getItem("score1") != null || localStorage.getItem("score2") != null) {
    player1 = +localStorage.getItem("score1");
    player2 = +localStorage.getItem("score2");
    playerScore1.innerText = player1;
    playerScore2.innerText = player2;
} else {
    player1 = 0;
    player2 = 0;
}

// Main Click
playWindow.addEventListener("click", clickBoard);

function clickBoard(event) {
    if (!winner && event.target.innerHTML === "") {
        event.target.innerHTML = currentPlayer === "Player 1" ? invader : robot;
        invaderInd.classList.toggle("hide");
        robotInd.classList.toggle("hide");
        event.target.classList.add("disable");
        currentPlayer === "Player 1" ? (currentPlayer = "Player 2") : (currentPlayer = "Player 1");
        currentGame.push(event.target.innerHTML);
        winCheck();
        drawCheck();
    }
    return;
}

// Check for Win Condition
function winCheck() {
    for (let index of winConditions) {
        let a = index[0];
        let b = index[1];
        let c = index[2];
        if (playWindow.children.length === 0) continue;
        else if (
            playWindow.children[a].innerHTML === playWindow.children[b].innerHTML &&
            playWindow.children[b].innerHTML === playWindow.children[c].innerHTML
        ) {
            if (playWindow.children[a].innerText === undefined) {
                return;
            } else if (playWindow.children[a].innerHTML === invader) {
                playerTurn.innerText = `PLAYER 1 WINS`;
                playerTurn.classList.add("player1");
                playWindow.children[a].classList.add("player1");
                playWindow.children[b].classList.add("player1");
                playWindow.children[c].classList.add("player1");
                player1++;
                playerScore1.innerText = player1;
                winCond();
            } else if (playWindow.children[a].innerHTML === robot) {
                playerTurn.innerText = `PLAYER 2 WINS`;
                playerTurn.classList.add("player2");
                playWindow.children[a].classList.add("player2");
                playWindow.children[b].classList.add("player2");
                playWindow.children[c].classList.add("player2");
                player2++;
                playerScore2.innerText = player2;
                winCond();
            }
        }
    }
}

// Function for common win conditions
function winCond() {
    winner = true;
    winAudio.play();
    resetBtn.style.display = "block";
    playAgainBtn.style.display = "block";
    winImg.style.display = "block";
    localStorage.setItem("score1", player1);
    localStorage.setItem("score2", player2);
}

// Check of draw
function drawCheck() {
    if (currentGame.length === 9 && winner === false) {
        playerTurn.innerText = "IT IS A TIE";
        playerTurn.style.color = "hsl(0, 0%, 0%)";
        resetBtn.style.display = "block";
        playAgainBtn.style.display = "block";
    }
}

// Function for both playagain and reset btn to clear board.
function boardClear() {
    item.innerText = "";
    item.classList.remove("player1", "player2", "disable");
    winner = false;
    currentGame = [];
    playerTurn.classList.remove("player1", "player2");
    playerTurn.style.color = "hsl(0, 0%, 0%)";
    resetBtn.style.display = "none";
    playAgainBtn.style.display = "none";
    winImg.style.display = "none";
    playerTurn.innerText = "";
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
        playerScore1.innerText = player1 = 0;
        playerScore2.innerText = player2 = 0;
        localStorage.setItem("score1", player1);
        localStorage.setItem("score2", player2);
    }
});
