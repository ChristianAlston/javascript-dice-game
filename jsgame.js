const buttonPress1 = document.getElementById('player1button');
const player1Score = document.getElementById('player1Score');
const buttonPress2 = document.getElementById('player2button');
const player2Score = document.getElementById('player2Score');
const game = document.getElementById('game');



const numberOfRounds = 5;
const determineWinner = () => {
    while (numberOfRounds < 5) {
        buttonPress1.addEventListener('click', () => {
            console.log();
            let newNumber = Math.floor(Math.random() * 6) + 1;
            player1Score.value.append(newNumber);
        })
        buttonPress2.addEventListener('click', () => {
            console.log();
            let newNumber = Math.floor(Math.random() * 6) + 1;
            player2Score.value.append(newNumber);
        })
        if (numberOfRounds === 5 && player1Score > player2Score) {
            let winner = document.createElement('h1');
            winner.innerText = 'Player 1 is the winner!';
            break;
        }
        if (numberOfRounds === 5 && player2Score > player1Score) {
            let winner = document.createElement('h1');
            winner.innerText = 'Player 2 is the winner!';
            break;
        }
        numberOfRounds++
    }
}