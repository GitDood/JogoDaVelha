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

//Variable to keep track of whose turn it is
var currentPlayer = 'X';

//Doesnt work, need a loop?
function changeTurn(num){
    num = 1
    if (num == 1){
        currentPlayer = "O"
        num++
    } else if (num == 2){
        currentPlayer = 'X';
        num--
    }
    console.log(num)
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

    } else if (tile === 'a5'){
        a5.innerHTML = letra;

    } else if (tile === 'a6'){
        a6.innerHTML = letra;

    } else if (tile === 'a7'){
        a7.innerHTML = letra;

    } else if (tile === 'a8'){
        a8.innerHTML = letra;

    } else if (tile === 'a9'){
        a9.innerHTML = letra;

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