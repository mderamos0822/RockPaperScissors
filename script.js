//use let to keep score and to add to them
let playerScore = 0
let compScore = 0

//Use this function to make the computer's play
const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
}

//Use this function to play a single round of RPS
const playRound = (playerSelection, computerSelection) =>  {
    if (playerSelection===computerSelection) {
        return `You tied! You both picked ${playerSelection}`
    }
    else if (playerSelection==='scissors' && computerSelection === 'rock') {
        //compScore = compScore +1, compScore--, compScore = compScore - 1
        compScore++
        return 'You lost! Rock crushes scissors'
    }
    else if (playerSelection==='rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost! Paper crushes rock'
    }
    else if (playerSelection==='paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost! Scissors cut paper'
    }
    else if (playerSelection==='paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won! Paper covers rock'
        }
    else if (playerSelection==='scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You won! Scissors cut paper'
        }
    else if (playerSelection==='rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! Rock crushes scissors'
        }
}

const playerSelection = 'rock';


//write a new function called game () and call the playRound function inside game ()
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('choose what to throw', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
}
//Check who won
        if (playerScore > compScore)  {
            return 'You beat the computer!'
        }
        else if (playerScore < compScore) {
            return 'You got beat by the computer!'
        }
        else {
            return 'You tied with the computer!'
    }
}

console.log(game())