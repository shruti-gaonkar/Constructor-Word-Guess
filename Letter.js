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
    // initializes the variable newProgrammer to be a programmer object which will take
    // in all of the user's answers to the questions above
    var newLetter = new Letter('a');
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
    var val = newLetter.guess(answers.name);
    console.log(newLetter + "");
});*/

module.exports = Letter;