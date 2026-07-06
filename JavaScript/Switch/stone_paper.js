const stone = 'stone';
const paper = 'paper';
const scissor = 'scissor';

let input = userInput(stone, paper);
console.log(input);

function userInput(user, computer){
    switch(true){
        case (user == stone && computer == paper):
            return 'computer Wins';
        case (user == paper && computer == stone):
            return 'user Wins';
        case (user == scissor && computer == stone):
            return 'computer Wins';
        case (user == stone && computer == scissor):
            return 'user Wins';
        case (user == paper && computer == scissor):
            return 'computer Wins';
        case (user == scissor && computer == paper):
            return 'user Wins';
        default:
            return 'No One Wins, Do again';
    }
}