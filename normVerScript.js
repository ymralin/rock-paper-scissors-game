let playerChoice
let cpuChoice
let roundResult
let scoreCPU
let scorePlayer

scoreCPU = 0
scorePlayer = 0

function playerTurn(plChoice) {
    playerChoice = plChoice
}

function cpuTurn() {
    let roll = Math.floor(Math.random()*3 +1)
    switch(roll) {
        case 1:
            cpuChoice = "rock";
            break;
        case 2:
            cpuChoice = "paper";
            break;
        case 3:
            cpuChoice = "scissors";
            break;
    }
}


function play() {
    let message1
    let message2
    switch (playerChoice) {
        case "rock":
            switch (cpuChoice) {
                case "rock":
                    roundResult = "tie";
                    message2 = "TIE";
                    break;
                case "paper":
                    roundResult = "cpu wins";
                    message2 = "CPU won.";
                    break;
                case "scissors":
                    roundResult = "Player wins";
                    message2 = "You won.";
                    break;
            };
            break;
            case "paper":
                switch (cpuChoice) {
                    case "rock":
                        roundResult = "Player wins";
                        message2 = "You won.";
                        break;
                    case "paper":
                        roundResult = "tie";
                        message2 = "TIE";
                        break;
                    case "scissors":
                        roundResult = "cpu wins";
                        message2 = "CPU won.";
                        break;
                };
                break;
        case "scissors":
            switch (cpuChoice) {
                case "rock":
                    roundResult = "cpu wins";
                    message2 = "CPU won.";
                    break;
                case "paper":
                    roundResult = "Player wins";
                    message2 = "You won.";
                    break;
                case "scissors":
                    roundResult = "tie";
                    message2 = "TIE";
                    break;
            };
            break;
    }

    switch (roundResult) {
        case "cpu wins":
            scoreCPU++;
            scoreBox.classList.add('scoreMinus')
            break;
        case "Player wins":
            scorePlayer++;
            scoreBox.classList.add('scorePlus')
            break;

    }

    message1 = "CPU chose " + cpuChoice + ". " + "You chose " + playerChoice + ". " ;
    document.getElementById("message1").textContent = message1;
    document.getElementById("message2").textContent = message2;
    document.getElementById("score").textContent = "CPU " + scoreCPU + " : " + scorePlayer + " Player"
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', clicked))

buttons.forEach(button => button.addEventListener('transitionend', removeTransition))

function clicked() {
    this.classList.add('clicked')
    //console.log(this)
    playerTurn(this.id);
    cpuTurn();
    play();
}

function removeTransition(e) {
    if(e.propertyName !=='transform') return;
    this.classList.remove('clicked')
    
    
}

const scoreBox = document.querySelector('#score');

scoreBox.addEventListener('transitionend', removeScoreTransition)

function removeScoreTransition(e) {
    
    if(e.propertyName !=='transform') return;
    this.classList.remove('scoreMinus')
    this.classList.remove('scorePlus')
}