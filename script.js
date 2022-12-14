const btn = document.querySelectorAll('button');
const winner = document.querySelector('.stat');
const playerText = document.querySelector('.playerText');
const computerText = document.querySelector('.computerText');
let arrayOfImages = ['./image/rock.png', './image/paper.png', './image/scissor.png'];
let playerSelection = 0;
let computerSelection;
btn.forEach(button => button.addEventListener('click', () => {
    GetComputerChoice();
    playerSelection = button.classList.value;
    playerText.textContent = playerSelection.toUpperCase();
    computerText.textContent = computerSelection.toUpperCase();
    winner.textContent = SelectWinner();
}));


function SelectWinner()
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection)
    {
        return "Draw";
    }
    else if (computerSelection == 'rock')
    {
        return (playerSelection == 'scissor') ? "you lose" : "You win";
    }
    else if (computerSelection == 'paper')
    {
        return (playerSelection == 'rock') ? "you lose" : "You win";
    }
    else if (computerSelection == 'scissor')
    {
        return (playerSelection == 'paper') ? "you lose" : "You win";
    }
}
function GetComputerChoice()
{
    let randNum = Math.floor((Math.random() * 3));
    switch(randNum)
    {
        case 0:
            computerSelection = 'ROCK';
            break;
        case 1:
            computerSelection = 'PAPER';
            break;
        case 2:
            computerSelection = 'SCISSOR'
    }
}