// ^ Guess the price

// ? My functions
function playGame() {
    // ? Random number
    var randomNumber = Math.round(Math.random() * 500 + 1); //ici on peut ne pas mettre +1, avec floor c'est judicieux
    // counting the number of guess
    /* console.log(randomNumber); */
    var guess = 0;

    while (randomNumber != numberQuestion) {

        guess++;
        // ? Question for user
        var question = prompt(
            "Turn : " + guess + " => " + " Can you guess it ? Enter a number between 1 and 500 !");
        /* console.log(question); */ // Be careful where you put elements
        var numberQuestion = parseInt(question, 10); // Change string generate with prompt() into a number
        /* console.log(numberQuestion); */
        // if user cancel et don't want to play

        if (question === null) {
            break;
        }

        if (randomNumber === numberQuestion) {
            alert("You are the BOSS !");
            alert("You guessed it in " + guess + " turn !");
        } else if (numberQuestion > 500) {
            alert("It's forbidden ! I told you between 1 and 500 ! ... Try again !");
        } else if (randomNumber < numberQuestion) {
            alert("It's a smaller number ! Try again !");
        } else if (randomNumber > numberQuestion) {
            alert("It's a higher number ! Try again !");
        } else {
            alert("It's not a number ... Try again !");
        }
    }
    // here, we keep the value of guess at the end of game
    return guess;
}

//create a table for display score
var scores = [];

// launch function 1st time
do {
    var score = playGame(); // be careful not a s at the end, here this new var take the value of guess and keep it here
    scores.push(score); // we want to get the value of playGame that defines how many time the user played, here we get the value and push it into our array
}
while (confirm("Do you want to play again ?"));


for(var i = 0 ; i < scores.length ; i++) {
    var score = scores[i];
    console.log("Game n° " + (i+1) + " : " + score + " try !");
}