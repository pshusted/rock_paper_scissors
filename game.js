
let userPlay = prompt("Rock, Paper or Scissors?", "");

const possibleHands = ["rock", "paper", "scissors"]

function computerPlay(array) {
    return possibleHands[~~(Math.random() * possibleHands.length)]
}

function game(hand1, hand2) {
    let userHand = userPlay.toLowerCase();
    let computerHand = computerPlay().toLowerCase();
    if (userHand == computerHand) {
        return(`Ewww! Tie game. ${computerHand} ties with ${userHand}`)
    }
    else if (
        (userHand == "rock" && computerHand == "scissors") ||
        (userHand == "scissors" && computerHand == "paper") ||
        (userHand == "paper" && computerHand == "rock")
    ) {
        return(`You Win! Your glorious ${userHand} obliterated their ${computerHand}`)
    }
    else if (
        (userHand == "rock" && computerHand == "paper") ||
        (userHand == "scissors" && computerHand == "rock") ||
        (userHand == "paper" && computerHand == "scissors")        
    ) {
        return(`Your pitiful ${userHand} was crushed by a massive ${computerHand}`)
    }
}