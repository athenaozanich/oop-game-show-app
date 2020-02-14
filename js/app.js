/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

document.querySelector("#btn__reset").addEventListener("click", () => {//Start game with addEventListener() on start game button
  const game = new Game();
  game.startGame();
});
