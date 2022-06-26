const gameState = {
    players: ['x','o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
}
// gameState[0][0];

let board = document.getElementById("board");
let cell00 = document.getElementById("00");

console.log('test', cell00);
/* board.addEventListener('click', (event) => {
    event.target.innerText = 'o'
    console.log('event', event);
    console.log(event.target.innerHTML)

} ); */

cell00.addEventListener('click', cellClickHandler);

function cellClickHandler(event) {
    console.log('click', event.target.id);
    event.target.innerText = 'o';
}

/* function playerSwap() {

}

 
function clearBoard() {

}

function validToWin() {

}

function validMove() {

} */