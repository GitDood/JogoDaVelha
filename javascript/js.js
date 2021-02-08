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

function checkIf_GameOver(){

    //horizontal p/ X
    if (a1.innerHTML === 'X' && a2.innerHTML === 'X' && a3.innerHTML === 'X'){
        alert('X ganhou');
        // tabuleiro.style.pointerEvents = 'none';
    } else if (a4.innerHTML === 'X' && a5.innerHTML === 'X' && a6.innerHTML === 'X') {
        alert('X ganhou');
    } else if (a7.innerHTML === 'X' && a8.innerHTML === 'X' && a9.innerHTML === 'X') {
        alert('X ganhou');

    //Vertical p/ X 
    } else if (a1.innerHTML === 'X' && a4.innerHTML === 'X' && a7.innerHTML === 'X') {
        alert('X ganhou');
    } else if (a2.innerHTML === 'X' && a5.innerHTML === 'X' && a8.innerHTML === 'X') {
        alert('X ganhou');
    } else if (a3.innerHTML === 'X' && a6.innerHTML === 'X' && a9.innerHTML === 'X') {
        alert('X ganhou');

    //Diagonal p/ X
    } else if (a1.innerHTML === 'X' && a5.innerHTML === 'X' && a9.innerHTML === 'X') {
        alert('X ganhou');
    } else if (a3.innerHTML === 'X' && a5.innerHTML === 'X' && a7.innerHTML === 'X') {
        alert('X ganhou');
    }

    //horizontal p/ O
    if (a1.innerHTML === 'O' && a2.innerHTML === 'O' && a3.innerHTML === 'O'){
        alert('O ganhou')
    } else if (a4.innerHTML === 'O)' && a5.innerHTML === 'O)' && a6.innerHTML === 'O') {
        alert('O ganhou');
    } else if (a7.innerHTML === 'O' && a8.innerHTML === 'O' && a9.innerHTML === 'O') {
        alert('O ganhou');

    //Vertical p/ O
    } else if (a1.innerHTML === 'O' && a4.innerHTML === 'O' && a7.innerHTML === 'O') {
        alert('O ganhou');
    } else if (a2.innerHTML === 'O' && a5.innerHTML === 'O' && a8.innerHTML === 'O') {
        alert('O ganhou');
    } else if (a3.innerHTML === 'O' && a6.innerHTML === 'O' && a9.innerHTML === 'O') {
        alert('O ganhou');

    //Diagonal p/ O
    } else if (a1.innerHTML === 'O' && a5.innerHTML === 'O' && a9.innerHTML === 'O') {
        alert('O ganhou');
    } else if (a3.innerHTML === 'O' && a5.innerHTML === 'O' && a7.innerHTML === 'O') {
        alert('O ganho');
    }


}

// console.log(changeTurn())

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

// while (true) {
//     //Make the player move

//     //Check if game is over
//     //Has anyone won?
//     if (gameOver) {
//         break;
//     }
// };