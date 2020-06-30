const game = document.querySelector('#game');
const match = document.querySelector('#match');
const darkmode = document.querySelector('#darkmode');
const newgame = document.querySelector('#newgame');
const body = document.querySelector('#body');
const buttons = document.querySelector('#roll');
const buttons2 = document.querySelector('#roll2');
const player1 = document.querySelector('#player1box');
const player2 = document.querySelector('#player2box');
let arrow = document.querySelector('#arrow');
let player1score = document.querySelector('#score1');
let player2score = document.querySelector('#score2');
let winner = document.createElement('h1');
winner.innerText = '';
winner.classList.add('winner');
let loser = document.createElement('h3');
loser.innerText = '';
loser.classList.add('loser');

darkmode.addEventListener('click', function () {
    game.classList.toggle('darkmode');
    body.classList.toggle('darkmode');
    match.classList.toggle('darkmode');
    player1.classList.toggle('darkmode');
    player1.classList.toggle('darkmode2');
    player2.classList.toggle('darkmode');
    player2.classList.toggle('darkmode2');
    buttons.classList.toggle('roll2');
    buttons2.classList.toggle('roll2');
    newgame.classList.toggle('newgame2');
})


buttons.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 6) + 1;
    let die = document.querySelector('#dice');
    die.src = random + '.png';
    player1score.innerHTML = random;
    if (random == 2) {
        winner.innerText = 'PLAYER 2 WINS';
        game.append(winner);
        player1score.innerText = 'YOU LOSE';
        player2score.innerText = 'YOU WIN'
    }
    if (random == 3) {
        winner.innerText = 'PLAYER 1 WINS';
        game.append(winner);
    }
    arrow.classList.toggle('reverse2');
})

buttons2.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 6) + 1;
    player2score.innerHTML = random;
    let die = document.querySelector('#dice');
    die.src = random + '.png';
    if (random == 2) {
        winner.innerText = 'PLAYER 1 WINS';
        game.append(winner);
        player2score.innerText = 'YOU LOSE';
        player1score.innerText = 'YOU WIN'
    }
    if (random == 3) {
        winner.innerText = 'PLAYER 2 WINS';
        game.append(winner);
    }
    arrow.classList.toggle('reverse2');
})

newgame.addEventListener('click', () => {
    player1score.innerHTML = '';
    player2score.innerHTML = '';
    p.remove();
})