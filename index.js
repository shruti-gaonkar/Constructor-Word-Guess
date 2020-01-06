var Word = require("./Word.js");

var wordArr = [];

wordArr.push("101 dalmatians",
    "aladdin",
    "aristocats");

var word_position = Math.floor(Math.random() * wordArr.length);
var word = wordArr[word_position];
word = this.word.toLowerCase();
//console.log(this.word);
/* remove the word displayed in the game from the global array 
so that it is not played again */
wordArr.splice(word_position, 1);

new Word(word);
