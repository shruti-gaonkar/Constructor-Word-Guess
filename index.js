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
            var guessedWord = newWord.showString(answers.name, count);
            console.log(guessedWord);
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