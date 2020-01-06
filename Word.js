var Letter = require("./Letter.js");
var inquirer = require("inquirer");

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
        this.guess(newLetter, letter);
        this.letterArr.push(newLetter);
    });
    //this.letterArr.push(new Letter(letter));
    console.log(this.letterArr.join(' '));
    var str = this.letterArr.join(' ');
    return str;
}

Word.prototype.guess = function (letterObj, character) {
    //var newLetter = new Letter(character);
    letterObj.guess(character);
}

module.exports = Word;

var newWord = new Word('happy');

inquirer.prompt([
    {
        name: "name",
        message: "Guess a letter!"
    }
]).then(function (answers) {
    // initializes the variable newProgrammer to be a programmer object which will take
    // in all of the user's answers to the questions above
    //var newLetter = new Letter('a');
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
    //var val = newLetter.guess(answers.name);
    newWord.showString(answers.name);
    //console.log(newLetter + "");
});

