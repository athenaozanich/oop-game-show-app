# Information regarding this project repository

## Goals
  In this project I used Object Oriented Javascript to create a puzzle find the phrase game. Using 'click' event and then real time physical keyboard listeners using 'keyup' event.

  User is dispalyed a set of hidden letters, qwerty keyboard buttons and option to use physical keyboard in order to guess the hidden letters. If the correct guess is made, the hidden letter is shown. In case of incorrect guess, one life is lost. If the user loses 5 lives, the game is Over and user can play again with new phrase.

## Languages
  1. HTML5
  2. CSS3
  4. Client side Javascript
  5. OOP programming methodology

## Technologies and Techniques
  1. Chrome Dev Tools
  2. Editors
  3. Terminal
  4. git and github
  5. Fluid-Mobile First Responsive Design
  6. CSS animations

I have added some cool animations as follows:

## Fun extras
1. Animation for the start screen overlay
2. Animation for the win and loss overlay
3. Added animations to each individual letter in the phrase
  - Set letters elements opacity to 0 on start
  - Set animation to change opacity
  - Set animation for both starting and ending the game
  - Use Js to add the animations classes dynamically with a delay between each letter
4. Add transition to phrase letters on reveal

## Techdegree Project Description
  In this project, you'll create a browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.

  Using Javascript, you’ll create an array of phrases and write functions to choose a random phrase from that array, split the phrase into letters, and put those letters onto the game board.

  Each time the player guesses a letter, you’ll need to compare the letter the player has chosen with the random phrase. If the letter is in the phrase, you’ll update the game board with the chosen letters.

  A player can keep choosing letters until they make five incorrect guesses. If the letter they chose isn’t in the phrase, you’ll remove one of the player’s 5 guesses.

  If the player completes the phrase before they run out of guesses, a winning screen will display. If the player guesses incorrectly 5 times, a losing screen will display.

  A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter. 