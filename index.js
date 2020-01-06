var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordArr = [];

wordArr.push("happy",
    "angry",
    "sad");

var word = getWord();
var newWord = new Word(word);
var count = 0;
var len = word.length * 2;

var askLetterInput = function () {
    if (count < len) {
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
            count++;
            askLetterInput();
        });
    } else {
        word = getWord();
        newWord = new Word(word);
        count = 0;
    }
}

askLetterInput();

function getWord() {
    var word_position = Math.floor(Math.random() * wordArr.length);
    var word = wordArr[word_position];
    word = word.toLowerCase();
    //console.log(this.word);
    /* remove the word displayed in the game from the global array 
    so that it is not played again */
    wordArr.splice(word_position, 1);
    return word;
}