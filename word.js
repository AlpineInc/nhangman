var Letter = require("./letter.js");

function Word(word){
	this.word = word;
	this.letters = [];

	for (var i = 0; i < word.length; i++) {
	    this.letters.push(new Letter(word.charAt(i)));
	};

	this.display = function(){
		var word = "";
		this.letters.forEach(function(letter){
			word = word + " " + letter.getLetter();
		})
		console.log(word);
	};
	this.evalGuess = function(guessedLetter){
		this.letters.forEach(function(letter){
			letter.evalGuess(guessedLetter);
		});
	};
	this.evalWord = function(){
		var wordMatch = true;
		this.letters.forEach(function(letter){
			if(!letter.getEvalStatus()){
				wordMatch = false;
			}
		});
		return wordMatch;
	}
};

module.exports = Word;