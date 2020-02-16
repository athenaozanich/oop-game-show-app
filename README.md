OOP Game Show App
In this project I used Object Oriented Javascript to create a puzzle find the phrase game. Using 'click' event and then real time physical keyboard listeners using 'keyup' event.

User is dispalyed a set of hidden letters, qwerty keyboard buttons and option to use physical keyboard in order to guess the hidden letters. If the correct guess is made, the hidden letter is shown. In case of incorrect guess, one life is lost. If the user loses 5 lives, the game is Over and user can play again with new phrase.


I have added some cool animations as follows:

-   Animation for the start screen overlay
-   Animation for the win and loss overlay
-   Added animations to each individual letter in the phrase
    -   Set letters elements opacity to 0 on start
    -   Set animation to change opacity
    -   Set animation for both starting and ending the game
    -   Use Js to add the animations classes dynamically with a delay between each letter
-   Changed overflow to hidden