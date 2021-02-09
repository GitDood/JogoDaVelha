//btns
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let a4 = document.querySelector('.a4');
let a5 = document.querySelector('.a5');
let a6 = document.querySelector('.a6');
let a7 = document.querySelector('.a7');
let a8 = document.querySelector('.a8');
let a9 = document.querySelector('.a9');

let border_p1 = document.getElementById('outline_p1');
let border_p2 = document.getElementById('outline_p2');
let score_p1 = document.getElementById('p1_score');
let score_p2 = document.getElementById('p2_score');
let tabuleiro = document.getElementById('tabuleiro');

//Variable to keep track of whose turn it is
var currentPlayer = 'X';
border_p1.style.border = '2px solid #375F1B';

function changeTurn(){

    //Change turns ._.
    if (currentPlayer == 'X') {
        currentPlayer = 'O';
        
        border_p2.style.border = '2px solid #375F1B';
        border_p1.style.border = 'none';
        console.log('X');

    } else {
        currentPlayer = 'X';
        border_p2.style.border = 'none';
        border_p1.style.border = '2px solid #375F1B';
        console.log('O');
    }
}

function cleanBoard() {
    var x, i;
    x = document.querySelectorAll(".b-spaces");
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML  = "";
    }
  }

function checkIf_GameOver(){
    //If X win
    if (a1.innerHTML === 'X' && a2.innerHTML === 'X' && a3.innerHTML === 'X' || a4.innerHTML === 'X' && a5.innerHTML === 'X' && a6.innerHTML === 'X'
    || a7.innerHTML === 'X' && a8.innerHTML === 'X' && a9.innerHTML === 'X' || a1.innerHTML === 'X' && a4.innerHTML === 'X' && a7.innerHTML === 'X'
    || a2.innerHTML === 'X' && a5.innerHTML === 'X' && a8.innerHTML === 'X' || a3.innerHTML === 'X' && a6.innerHTML === 'X' && a9.innerHTML === 'X'
    || a1.innerHTML === 'X' && a5.innerHTML === 'X' && a9.innerHTML === 'X' || a3.innerHTML === 'X' && a5.innerHTML === 'X' && a7.innerHTML === 'X'){

        console.log('win')
        // tabuleiro.style.pointerEvents = 'none';
        score_p1.innerHTML =+1;
        cleanBoard()

    } else if (a1.innerHTML === 'O' && a2.innerHTML === 'O' && a3.innerHTML === 'O' || a4.innerHTML === 'O)' && a5.innerHTML === 'O)' && a6.innerHTML === 'O'
    || a7.innerHTML === 'O' && a8.innerHTML === 'O' && a9.innerHTML === 'O' || a1.innerHTML === 'O' && a4.innerHTML === 'O' && a7.innerHTML === 'O'
    || a2.innerHTML === 'O' && a5.innerHTML === 'O' && a8.innerHTML === 'O' || a3.innerHTML === 'O' && a6.innerHTML === 'O' && a9.innerHTML === 'O'
    || a1.innerHTML === 'O' && a5.innerHTML === 'O' && a9.innerHTML === 'O' || a3.innerHTML === 'O' && a5.innerHTML === 'O' && a7.innerHTML === 'O'){
        
        console.log('winOO')
        // tabuleiro.style.pointerEvents = 'none';
        score_p2.innerHTML =+1;
        cleanBoard();
    }
}

function tileClicked(tile){

    let letra = currentPlayer;

    if (tile === 'a1'){
        a1.innerHTML = letra;
        changeTurn();

    } else if (tile === 'a2'){
        a2.innerHTML = letra;
        changeTurn();
        
    } else if (tile === 'a3'){
        a3.innerHTML = letra;
        changeTurn();

    } else if (tile === 'a4'){
        a4.innerHTML = letra;
        changeTurn();

    } else if (tile === 'a5'){
        a5.innerHTML = letra;
        changeTurn();

    } else if (tile === 'a6'){
        a6.innerHTML = letra;
        changeTurn();

    } else if (tile === 'a7'){
        a7.innerHTML = letra;
        changeTurn();

    } else if (tile === 'a8'){
        a8.innerHTML = letra;
        changeTurn();

    } else if (tile === 'a9'){
        a9.innerHTML = letra;
        changeTurn();
    }
    checkIf_GameOver();
}

function resetBoard(){
    cleanBoard();
    score_p1.innerHTML = 0;
    score_p2.innerHTML = 0;
}