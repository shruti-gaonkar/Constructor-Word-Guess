var Letter = require("./Letter.js");
var inquirer = require("inquirer");

function Word(word) {
    this.word = word;
    this.letterArr = [];
}

Word.prototype.showString = function (letter, guessed) {
    var letterArr = this.word.split('');
    var guessedFlag = false;
    letterArr.forEach((element, index) => {
        var newLetter = new Letter(element);
        this.guess(newLetter, letter);
        if (newLetter.isGuessed) {
            guessedFlag = true;
        }
        if (guessed > 0) {
            if (newLetter.isGuessed) {
                this.letterArr[index] = newLetter;
            }
        } else {
            this.letterArr.push(newLetter);
        }
    });
    var str = this.letterArr.join(' ');
    var returnArr = [];
    returnArr['str'] = str;
    returnArr['guessedFlag'] = guessedFlag;
    return returnArr;
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
