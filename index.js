var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordArr = [];

wordArr.push("happy",
    "happy face",
    "angry",
    "sad");

var resWordArr = guessedLettersArr = [];
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
            var newKeyPressed = false;
            if (!guessedLettersArr.includes(answers.name)) {
                guessedLettersArr.push(answers.name);
                newKeyPressed = true;
            }
            var guessedWord = newWord.showString(answers.name, count, noOfGuesses);
            console.log(guessedWord);
            if (!guessedWord.includes("_")) {
                console.log("You got it right! Next Word!");
                var resWordArr = guessedLettersArr = [];
                resWordArr = getWord();
                newWord = new Word(resWordArr['word']);
                count = 0;
                noOfGuesses = resWordArr['word'].length * 2;
                wordArr.splice(resWordArr['word_position'], 1);
            } else {
                count++;
            }

            if (newKeyPressed) {
                noOfGuesses--;
            } else {
                console.log("'" + answers.name + "' is already guessed. Please try some different letter.")
            }

            askLetterInput();
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