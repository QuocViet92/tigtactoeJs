function $(element) {
    return document.getElementById(element);
}
let click = 0;
let turn = true;
const scoreX = $("scoreX");
const scoreO = $("scoreO");
const boards = document.querySelectorAll(".row");
let board = Array(boards.length).fill(null);

function playGame(row) {
    row.innerText = turn ? "X" : "O";
    row.classList.add(turn ? "xRow" : "oRow");
    turn = !turn;
    click++;
    for (let i in board) {
        board[i] = $([i]).innerText;
    }
    for (const key of win) {
        let [a, b, c] = key;
        if (board[a] && board[a] == board[b] && board[a] == board[c]) {
            click = 0;
            $("winwin").classList.add(
                `gachngang-${key[0]}-${key[1]}-${key[2]}`
            );
            board[a] == "X" ? xWin() : oWin();
        }
    }
    if (click == 9) {
        alert(" Hòa ");
    }
}

function hello() {
    const boards = document.querySelectorAll(".row");
    for (let i in boards)
        if (i % 2 == 0) {
            boards[i].classList.add("newRow");
        }
}

function xWin() {
    alert("X Win ");
    $("bang").classList.add("banggg");

    scoreX.innerText++;
    click = 0;
    $("winwin").style.backgroundColor = "red";
}

function oWin() {
    alert("O Win ");
    $("bang").classList.add("banggg");
    scoreO.innerText++;
    click = 0;
    $("winwin").style.backgroundColor = "yellow";
}

window.onload = hello();
window.onload = turnn();
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

function reset() {
    let rows = document.getElementsByClassName("row");
    for (const key of rows) {
        key.classList.remove("xRow");
        key.classList.remove("oRow");
        key.innerText = "";
        key.classList.remove("rowwin");
    }
    $("bang").classList.remove("banggg");

    for (const key of win) {
        let [a, b, c] = key;
        if (board[a] && board[a] == board[b] && board[a] == board[c]) {
            $("winwin").classList.remove(
                `gachngang-${key[0]}-${key[1]}-${key[2]}`
            );
        }
    }
    turn = turn;
    click = 0;
    turnn();
}

function Exit() {
    let rows = document.getElementsByClassName("row");
    for (const key of rows) {
        key.classList.remove("xRow");
        key.classList.remove("oRow");
        key.classList.remove("rowwin");
        key.innerText = "";
    }
    for (const key of win) {
        let [a, b, c] = key;
        if (board[a] && board[a] == board[b] && board[a] == board[c]) {
            $("winwin").classList.remove(
                `gachngang-${key[0]}-${key[1]}-${key[2]}`
            );
        }
    }

    $("bang").classList.remove("banggg");
    scoreO.innerText = "0";
    scoreX.innerText = "0";
    click = 0;
    turn = true;
    turnn();
}

function turnn() {
    if (turn == true) {
        $("luotchoi").innerText = "Lượt Chơi Của  X";
    } else {
        $("luotchoi").innerText = "Lượt Chơi Của  O";
    }
}
