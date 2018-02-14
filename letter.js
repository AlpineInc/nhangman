function Letter(letter){
    this.letter = letter;
    if(this.letter === " "){
        this.status = true;
    } else{
        this.status = false;
    }
    this.getLetter = function(){
        if(this.status){
            return this.letter;
        } else{
            return "-";    
        }      
    };
    this.evalGuess = function(guessedLetter){
        if(this.letter === guessedLetter){
            this.status = true;
        }
    };
    this.getEvalStatus = function(){
        return this.status;
    };
};

module.exports = Letter;