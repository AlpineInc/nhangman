//inport dependencies
var inquirer = require("inquirer");
var Word = require("./word.js");

//global configurations
var wordList = ["cat", "dog", "tiger", "frog", "elephant", "rattle snake"];
var maxGuesses = 10;
var score = 0;

//the main function that runs the instance of the hangman game from start to end.
async function hangman() {
	var randomNum = Math.floor(Math.random() * wordList.length);
    var word = new Word(wordList[randomNum]);

    word.display();

    var i = 0;
    while (i < maxGuesses && !word.evalWord()) {
        i++;
        var userInput = await inquirer.prompt([{
                type: "input",
                message: "Input a letter: ",
                name: "guessedLetter"
            }]);
        word.evalGuess(userInput.guessedLetter);
        word.display();
    }

    if (word.evalWord()) {
    	score++;
        console.log("\nYou won! Your current score is " + score + "\n");
    } else {
    	console.log("\nSorry. You lost. Your current score is " + score + "\n");
    }

   	wordList.splice(randomNum, 1);

   	if(wordList.length>=1){
   		console.log("Try the next word..\n");
   		hangman();
   	} else{
   		console.log("Your final score is " +  score);
   	}
};

//start the game
inquirer.prompt(
	{
        type: "input",
        message: "\n\n\n\nYou will be asked to guess a list of animals. You have 10 chances to correctly guess each animal. Good luck. Press any key to begin...\n\n",
        name: "start"
    })
	.then(function(){
		console.log("Guess the first word..\n");
		hangman();		
});

