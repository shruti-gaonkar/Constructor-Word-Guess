# Constructor-Word-Guess

### File

* [`constructor-word-guess`](Constructor-Word-Guess/blob/master/index.js)

### Technologies
Node, Javascript

### Description
A Word Guess command-line game using constructor functions.

1. Link: 
    * Repo Link: https://github.com/shruti-gaonkar/Constructor-Word-Guess

    * Gif Link: https://media.giphy.com/media/MXXPYGxP5rS5ObniH8/giphy.gif

2. In this game the player has to guess the names of animals.

3. The terminal prompts the player to guess the letter in the selected word.

4. If the player enters a letter eg. 'i'

   * The game shows: `_ i _ `.

   * As the user guesses the correct letters, they show up like this: `p i _`.

   * The repeated letters are shown as many times they appear in the word.

   * Word with spaces are also used in the game.

![Word with spaces](assets/images/screenshots/gp_guess.png)

5. If player guesses same letter again, a message is displayed to enter some other letter.

![Already Guessed Word](assets/images/screenshots/already_guessed.png)

6. The game shows number of guesses remaining for the player.

7. After the user wins/loses

    * Messages are displayed accordingly

    ![Incorrect](assets/images/screenshots/gp_guess_letter_incorrect.png)

    ![Correct](assets/images/screenshots/hippo_guess_correct1.png)

    * The game automatically chooses another word and makes the user play it.

    ![Next Word](assets/images/screenshots/cow.png)


8. The game also validates the user input to allow only alphabets.

    ![Validation](assets/images/screenshots/validation.png)
