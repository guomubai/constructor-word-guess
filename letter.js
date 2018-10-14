// Reuire the necessary npm packages
var inquirer = require("inquirer")
var prompt = require('prompt');

//connect it to the word js file
var wordFile = require("./word.js")

return module.exports;

//This variable will hold the  "_" + the letters that are guessed correctly
var placeholderLetters = [];

// limit the numbner of Guesses
var numberOfGuesses = 25;

// Set out the constructor "Letter"
function Letter (lettersGuessed, placeholderLetters) {
	this.lettersGuessed = lettersGuessed,
	this.placeholderLetters = placeholderLetters
};

// Set out function that will start the game
var startGame = function() {
	
// runs the placeholder hunction at the start of the game " _ _"
wordFile.placeHolder();

	// runs inquirer and ask the user questions
	// replies are then storein variable answers after the .then
	inquirer.prompt([{
		type: "input",
		message: "Guess a Letter!",
		validate: function(value) {
			if (isNaN(value) === true) {
				return true;
			}
			return false;
		},
	},]).then(function(res) {
		// start the variable that will be an object the user uses to answer questions
		var letter = new Letter(res.lettersGuessed);

		for (var i = 0; i < chosenWord.length; i++) {
			if (this.letterInWord[i] === this.letter) {

				// if letter matches, set boolean to true
				this.lettersGuessed = true;
				console.log("Your letter guess " + res.lettersGuessed + " is correct!");
				
			} else {
				console.log("Your letter guess " + res.lettersGuessed + "is incorrect! Please try again.");
			}
		}

		// the letter is then indexed in chosenWord then loop through and populate
		if (this.lettersGuessed) {

			// loop through the chosenWord which is all placeHolder
			for (j = 0; j < placeHolder.length; j++) {

				// match the letters in the word
				if (this.letterInWord[j] === this.letter) {

					// set the specific blank spaces to equal the corretl letter if match
					this.placeHolder[j] = this.letter;
				}
			}

			// now we show the current state of chosenWord which will blank palceholders with letters combines
			console.log(placeholderLetters);
		}
		// add ine to number of guesses
		numberOfGuesses++;
		// run the ask question function again - either end the loop or ask the questions again
		startGame();

	})




}

// Call StartGame to run the code
startGame();

// Now to end the endGame function

function endGame() {

	if (letterInWord.toString() === placeHolder.toString()) {
		alert("You win!! Please play another game!")
		// restart the game
		startGame();

	} else if(numberOfGuesses === 0) {

		// run an inquirer to ask the palyer if they want to start a new game
		inquirer.prompt([{
			type: "input",
			message: "You are now all out of guesses. Would you like to play again?",
			name: "Confirm",
			default: true
		},])
		.then(function(err, res) {
			if (res.confirm) {
				console.log("\nOK! A new game of hangman will begin!\n");
				// and restart the game
				startGame();
			} else {
				console.log("\nThank you for playing! Play again when you are ready!\n");
			}
		})
	}
}

endGame();
