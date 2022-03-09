// ^ Guess the price


// ? Random number
var randomNumber = Math.round(Math.random() * 500 + 1);
var guess = 0; // counting the number of guess
console.log(randomNumber);

// ? My functions
function guessedNumber() {
    while (randomNumber != numberQuestion) {
        guess++;
        // ? Question for user
        var question = prompt("Turn : " + guess + " => " + " Can you guess it ? Enter a number between 1 and 500 !");
        console.log(question); // Be careful where you put elements
        var numberQuestion = parseInt(question, 10); // Change string generate with prompt() into a number
        console.log(numberQuestion);
        if (randomNumber === numberQuestion) {
            alert("You are the BOSS !");
            alert("You guessed it in " + guess + " turn !")
        } else if (numberQuestion > 500) {
            alert("It's forbidden ! I told you between 1 and 500 ! ... Try again !")
        } else if (randomNumber < numberQuestion) {
            alert("It's a smaller number ! Try again !");
        } else if (randomNumber > numberQuestion) {
            alert("It's a higher number ! Try again !");
        } else {
            alert("It's not a number ... Try again !")
        }
    }

}

guessedNumber();