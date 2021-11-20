let player1 = 0;
let player2 = 0;
let currentPlayer = "p1";

document.querySelector(".play_window").addEventListener("click", function (event) {
    if (event.target.textContent === "") {
        if (currentPlayer === "p1") {
            event.target.classList.add("player1");
            event.target.textContent = "X";
            currentPlayer = "p2";
        } else if (currentPlayer === "p2") {
            event.target.classList.add("player2");
            event.target.textContent = "O";
            currentPlayer = "p1";
        }
    }
});
