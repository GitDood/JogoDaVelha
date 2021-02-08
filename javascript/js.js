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

//Variable to keep track of whose turn it is
var currentPlayer = 'X';
border_p1.style.border = '2px solid #375F1B';

function changeTurn(){

    //Change turns ._.
    if (currentPlayer == 'X') {
        currentPlayer = 'O';
        
        border_p1.style.border = '2px solid #375F1B';
        border_p2.style.border = 'none';
        console.log('X')
    } else {
        currentPlayer = 'X';
        border_p1.style.border = 'none';
        border_p2.style.border = '2px solid #375F1B';
        console.log('O')
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
}

// while (true) {
//     //Make the player move

//     //Check if game is over
//     //Has anyone won?
//     if (gameOver) {
//         break;
//     }
// };