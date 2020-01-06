var Letter = require("./Letter.js");

function Word(word) {
    /*var len = word.length;
    this.letterArr = {
        '_',
        '_'
    };
    array.forEach(element => {
        
    });*/
    this.word = word;
    this.letterArr = [];
}

Word.prototype.showString = function (letter) {

    //Letter.guessLetter();
    var letterArr = this.word.split('');
    letterArr.forEach(element => {
        var newLetter = new Letter(element);
        newLetter.guess(letter);
        this.letterArr.push(newLetter);
    });
    //this.letterArr.push(new Letter(letter));
    console.log(this.letterArr.join(', '));
    return str;
}

Word.prototype.guess = function (character) {
    Letter.guess(character);
}