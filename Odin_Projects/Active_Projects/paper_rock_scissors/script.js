
/// Definition of variables, starting values, and valid options
let options = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let tieScore = 0
let result
let playerSelection
let computerSelection
let totalRoundCount = 0;

/// DOM elements
const roundResults = document.querySelector('#roundResults');
const finalResults = document.querySelector('#finalResults');
const buttons = document.querySelectorAll("button");

/// Function so the computer selects a random option from the options array
function computerPlay() {
        let selection = options[Math.floor(Math.random()*options.length)];
        return selection;
    }

/// Function to capitalise the first letter of options when displaying results
function capitalise(word) {
    word = word[0].toUpperCase() + word.toLowerCase().slice(1)
    return word;
}

/// Function to define the round results and message
function playRound(computerSelection, playerSelection) {
    if (computerSelection == "rock") document.getElementById("computerChoice").src = "images/rock.jpg"
    if (computerSelection == "scissors") document.getElementById("computerChoice").src = "images/scissors.jpg"
    if (computerSelection == "paper") document.getElementById("computerChoice").src = "images/paper.jpg"
    if (playerSelection == "rock") document.getElementById("playerChoice").src = "images/rock.jpg"
    if (playerSelection == "scissors") document.getElementById("playerChoice").src = "images/scissors.jpg"
    if (playerSelection == "paper") document.getElementById("playerChoice").src = "images/paper.jpg"

    if (computerSelection == playerSelection) {
        result = "It's a tie!";
    } else if (computerSelection == "rock") {
        switch(true) {
            case playerSelection == "scissors":
            result = `You lose! 
                ${capitalise(computerSelection)} smashes ${playerSelection}!`
            break;
            case playerSelection == "paper":
            result =  `You win! 
                ${capitalise(playerSelection)} smothers ${computerSelection}!`
            break;};
    } else if (computerSelection == "scissors") {
        switch(true) {
            case playerSelection == "paper":
            result = `You lose! 
                ${capitalise(computerSelection)} cut ${playerSelection}!`
            break;
            case playerSelection == "rock":
            result =  `You win! 
                ${capitalise(playerSelection)} smashes ${computerSelection}!`
            break;};
    } else if (computerSelection == "paper") {
        switch(true) {
            case playerSelection == "rock":
            result = `You lose! 
                ${capitalise(computerSelection)} smothers ${playerSelection}!`
            break;
            case playerSelection == "scissors":
            result =  `You win! 
                ${capitalise(playerSelection)} cut ${computerSelection}!`
            break;};
    } else {
        result = "Oops something went wrong";
    } 
    return result }

function updateResults() {
    if (totalRoundCount < 5) {
        ++totalRoundCount
        const newID = "round" + totalRoundCount + "Results";
        const div = document.createElement('div');
        div.setAttribute("id", newID);

        if (result.search("win") != -1) {
            ++playerScore 
            div.setAttribute("style", "background-color: mediumseagreen")
        } else if (result.search("tie") != -1) {
            ++tieScore 
            div.setAttribute("style", "background-color: burlywood")
        } else {
            ++computerScore
            div.setAttribute("style", "background-color: crimson")
        }

        document.getElementById("runningPlayerScore").textContent = playerScore;
        document.getElementById("runningComputerScore").textContent = computerScore;


        div.innerHTML = `<h2>ROUND ${totalRoundCount}</h2>
            ${result}<br>
            Player score: ${playerScore}<br>
            Computer score: ${computerScore}<br>
            Tied rounds: ${tieScore}<br>` 
        roundResults.appendChild(div); 

            if (totalRoundCount === 5 || playerScore === 3 || computerScore === 3) {
                let resultMessage
            
                if (playerScore === computerScore) {
                    resultMessage = "It's a tie!"
                } else if (playerScore > computerScore) {
                    resultMessage = "You win!"
                } else {
                    resultMessage = "Computer wins!"
                }
                const finalScoreDisplay = document.getElementById("gameOver")
                finalScoreDisplay.innerHTML = `<h1>GAME OVER</h1> ${resultMessage}`;
                finalResults.appendChild(finalScoreDisplay);

                document.getElementById("buttonContainer").style.display="none";

            }
    } 
}

/// Defines button onclick events

buttons.forEach((button) => {
button.addEventListener('click', (e) => {
    playerSelection = button.id;
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection)
    updateResults();
    })
});
