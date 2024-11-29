// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
// math.random takes random number between maxNum and minNum +1 makes 
//  possible result with 1 to 100 other wise (100 - 1) only 99 guesses
//  +minNum makes sure range strts form minNum
//  math.floor returns a whole number
const answer = Math.floor(Math.random() * (maxNum -minNum +1 ))+ minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(" TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }else{
            window.alert(`CORRECT GUESS !!!. It took you ${attempts} attempts`);
            running = false;
        }
    }
}