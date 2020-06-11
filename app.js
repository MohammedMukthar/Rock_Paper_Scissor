let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector(".dip > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    showPicture(userChoice, computerChoice);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You lost!`;
    showPicture(userChoice, computerChoice);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`;
    showPicture(userChoice, computerChoice);
}

function showPicture(u, c) {

    const paper = "images/paper.png";
    const rock = "images/rock.png";
    const scissor = "images/scissor.png";
    const user = document.getElementById('userImage');
    const comp = document.getElementById('compImage');
    switch (u + c) {
        case "rs":
            user.src = rock;
            user.style = 'inline-block';
            comp.src = scissor;
            comp.style = 'inline-block';
            break;
        case "pr":
            user.src = paper;
            user.style = 'inline-block';
            comp.src = rock;
            comp.style = 'inline-block';
            break;
        case "sp":
            user.src = scissor;
            user.style = 'inline-block';
            comp.src = paper;
            comp.style = 'inline-block';
            break;
        case "rp":
            user.src = rock;
            user.style = 'inline-block';
            comp.src = paper;
            comp.style = 'inline-block';
            break;
        case "ps":
            user.src = paper;
            user.style = 'inline-block';
            comp.src = scissor;
            comp.style = 'inline-block';
            break;
        case "sr":
            user.src = scissor;
            user.style = 'inline-block';
            comp.src = rock;
            comp.style = 'inline-block';
            break;
        case "rr":
            user.src = rock;
            user.style = 'inline-block';
            comp.src = rock;
            comp.style = 'inline-block';
            break;
        case "pp":
            user.src = paper;
            user.style = 'inline-block';
            comp.src = paper;
            comp.style = 'inline-block';
            break;
        case "ss":
            user.src = scissor;
            user.style = 'inline-block';
            comp.src = scissor;
            comp.style = 'inline-block';
            break;

    }

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main();