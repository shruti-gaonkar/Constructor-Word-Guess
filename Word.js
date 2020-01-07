var Letter = require("./Letter.js");
var inquirer = require("inquirer");

function Word(word) {
    this.word = word;
    this.letterArr = [];
}

Word.prototype.showString = function (letter, guessed, noOfGuesses) {
    var letterArr = this.word.split('');
    var msg = "INCORRECT!!!";
    msg += `${noOfGuesses} guesses remaining`;
    letterArr.forEach((element, index) => {
        var newLetter = new Letter(element);
        this.guess(newLetter, letter);
        if (newLetter.isGuessed) msg = "CORRECT!!!";
        if (guessed > 0) {
            if (newLetter.isGuessed) {
                this.letterArr[index] = newLetter;
            }
        } else {
            this.letterArr.push(newLetter);
        }
    });
    console.log(msg);
    var str = this.letterArr.join(' ');
    return str;
}

Word.prototype.guess = function (letterObj, character) {
    letterObj.guess(character);
}

module.exports = Word;

/*var newWord = new Word('happy');

inquirer.prompt([
    {
        name: "name",
        message: "Guess a letter!"
    }
]).then(function (answers) {
    newWord.showString(answers.name);
});
*/
