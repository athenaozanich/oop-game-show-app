/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor(){
    this.missed =`0`;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  createPhrases(){
    const phrases =[
      { phrase: "As you wish"},
      { phrase: "Whats knitten kitten"},
      { phrase: "Danger Will Robinson"},
      { phrase: "Single serving friends"},
      { phrase: "Si vis pacem para bellum"}
    ];
        
      return phrases;
  };

  getRandomPhrase() {
    let random = Math.floor(Math.random() * this.phrases.length);//Dynamic random based on the number of phrases in the array
    this.activePhrase = this.phrases[random];
    return new Phrase(this.activePhrase);
  };

  startGame(){
    this.getRandomPhrase().addPhraseToDisplay();
    document.getElementById("overlay").style.display = "none";
  };

  handleInteraction(){

  };

  checkForWin(){

  };

  removeLife() {

  };
}