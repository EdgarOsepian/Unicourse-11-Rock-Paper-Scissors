const choice = ['rock', 'paper', 'scissors'];    // Choice variants


// Get Computer Random Choice
function getComputer(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}


// Playing the round ; determining winners //
function round (player, computer) {

    console.log(player, computer);

    if (player == computer){
        console.log("Tie! You both picked the same choice.");

    } else if (player =="rock" && computer =="scissors"){
        console.log("Winner! Rock beats scissors.");

    } else if (player =="paper" && computer =="rock"){
        console.log("Winner! Paper beats rock.");

    } else if (player =="scissors" && computer =="paper"){
        console.log("Winner! Scissors beats paper.");

    } else {
        console.log("You Lose!");
    }
}

const player = prompt("Please enter value").toLowerCase();
const computer = getComputer(choice);
round(player, computer);