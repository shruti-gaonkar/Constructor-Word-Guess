var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordArr = [];

wordArr.push("happy",
    "angry",
    "sad");

var resWordArr = [];
resWordArr = getWord();
var newWord = new Word(resWordArr['word']);
var count = 0;
var noOfGuesses = (resWordArr['word'].length + 4);

var askLetterInput = function () {
    console.log(wordArr.length);
    if (wordArr.length > 0) {
        inquirer.prompt([
            {
                name: "name",
                message: "Guess a letter!"
            }
        ]).then(function (answers) {
            var guessedWord = newWord.showString(answers.name, count, noOfGuesses);
            console.log(guessedWord);
            if (!guessedWord.includes("_")) {
                console.log("You got it right! Next Word!");
                var resWordArr = [];
                resWordArr = getWord();
                newWord = new Word(resWordArr['word']);
                count = 0;
                noOfGuesses = resWordArr['word'].length * 2;
                wordArr.splice(resWordArr['word_position'], 1);
            } else {
                count++;
            }
            askLetterInput();
            noOfGuesses--;
        });
    } else {
        console.log("Game Over!!");
    }
}

askLetterInput();

function getWord() {
    var word_position = Math.floor(Math.random() * wordArr.length);
    var word = wordArr[word_position];
    word = word.toLowerCase();
    /* remove the word displayed in the game from the global array 
    so that it is not played again */
    var returnArr = [];
    returnArr['word'] = word;
    returnArr['word_position'] = word_position;
    return returnArr;
}