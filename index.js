var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordArr = [];

wordArr.push("cow",
    "hippo",
    "guinea pig",
    "sheep",
    "monkey");

var resWordArr = guessedLettersArr = [];
resWordArr = getWord();
var newWord = new Word(resWordArr['word']);
var count = 0;
var noOfGuesses = (resWordArr['word'].length + 4);

var askLetterInput = function () {
    if (wordArr.length > 0) {
        inquirer.prompt([
            {
                name: "name",
                message: "Guess a letter!",
                validate: function validateInput(name) {
                    if (!name.match(/^[a-zA-Z]+$/)) {
                        return 'Only alphabets are allowed';
                    }
                    return name !== '';
                }
            }
        ]).then(function (answers) {
            var newKeyPressed = false;
            if (!guessedLettersArr.includes(answers.name)) {
                guessedLettersArr.push(answers.name);
                newKeyPressed = true;
            }
            var guessedArr = [];
            guessedArr = newWord.showString(answers.name, count);

            var guessedWord = guessedArr['str'];
            console.log('\n' + guessedWord);
            if (!newKeyPressed) {
                console.log("\n\n'" + answers.name + "' is already guessed. Please try some different letter.");
            } else if (guessedArr['guessedFlag']) {
                console.log('\x1b[32m', '\n\nCORRECT!!!\n');
            } else {
                console.log('\x1b[31m', '\n\nINCORRECT!!!');
                console.log('\x1b[37m', `\n${noOfGuesses} guesses remaining!!!\n`);
            }

            if (!guessedWord.includes("_") || noOfGuesses < 1) {
                if (noOfGuesses < 1 && !guessedArr['guessedFlag']) {
                    console.log('\x1b[37m', "\nOops!! No guesses remaining.");
                } else {
                    console.log('\x1b[37m', "\nYou got it right!");
                }
                wordArr.splice(resWordArr['word_position'], 1);

                if (wordArr.length > 0) {
                    console.log('\x1b[37m', 'Next Word!\n');
                    resWordArr = guessedLettersArr = [];
                    resWordArr = getWord();
                    newWord = new Word(resWordArr['word']);
                    count = 0;
                    noOfGuesses = resWordArr['word'].length * 2;
                }
            } else {
                count++;
            }

            if (newKeyPressed) {
                noOfGuesses--;
            }

            askLetterInput();
        });
    } else {
        console.log("\n\nGame Over!!");
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