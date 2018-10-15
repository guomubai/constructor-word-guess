// get inquirer package stuff
var inquirer = require("inquirer");
var prompt = require("prompt");
// make sure ot required the letter js file
var letter = require("./letter");

// make that bank of words
var wordBank = ["superman", "wolverine", "spiderman", "rogue"];


// this is where the chosen word will go into from wordBank
var chosenWord = "";

// number of "_" for the spaceHolder
var spaceHolder = "_";

//We split the word and put it in this array
var letterInWord = [];

// now we set out the constructor function that creates objects
function Word(chosenWord, spaceHolder, letterInWord) {
	this,chosenWord = chosenWord,
	this.spaceHolder = spaceHolder,
	this.letterInWord = letterInWord
};

// Here we put placeholders for all words in wordBank 
Word.prototype.placeHolder = function() {

	this.chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	this.letterInWord = chosenWord.split("");
	this.spaceHolder = letterInWord.length;

	for (var i = 0; i < letterInWord.length; i++) {
		spaceHolder += letterInWord.length;
	}
	console.log(this.spaceHolder);
};

var word = new Word(chosenWord, spaceHolder, letterInWord);
// run palceholder ptortotype at start of game
word.placeHolder()

// make sure ot export out wordbank and other parts
module.exports = wordBank;
module.exports = Word;
module.exports = word;

