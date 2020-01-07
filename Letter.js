var inquirer = require("inquirer");

function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;
    this.placeholder = '_';
}

Letter.prototype.toString = function () {
    if (this.letter == " ") return " ";

    return (this.isGuessed) ? this.letter : this.placeholder;
}

Letter.prototype.guess = function (letterGuessed) {
    if (letterGuessed == this.letter) {
        this.isGuessed = true;
    }
}

/*inquirer.prompt([
    {
        name: "name",
        message: "Guess a letter!"
    }
]).then(function (answers) {
    var newLetter = new Letter('a');
    var val = newLetter.guess(answers.name);
    console.log(newLetter + "");
});*/

module.exports = Letter;