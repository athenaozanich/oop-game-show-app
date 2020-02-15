/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor(){
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    this.wins = 0;
    this.losses = 0;
    this.overlay = document.getElementById('overlay');
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
    let randomPhrase = new Phrase(this.phrases[random]);
    console.log(randomPhrase);
    return randomPhrase;
  };

  startGame(){
    this.clearBoard();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  handleInteraction(clckdBtn){
    if( this.activePhrase.checkLetter(clckdBtn) ){ 
      clckdBtn.disabled = true;
      clckdBtn.classList = 'chosen';
      this.activePhrase.showMatchedLetter(clckdBtn.innerHTML);
      if( this.checkForWin() ) this.gameOver(true);
    }else{
      clckdBtn.disabled = true;
      clckdBtn.classList = 'wrong';
      this.removeLife();
    }
  };

  checkForWin(){
    const phrase = document.querySelectorAll('.letter');
    const guessed = document.querySelectorAll('.show');
    if( guessed.length === phrase.length ){
      this.wins++;
      return true;
    }else{
      return false;
    }
  };

  removeLife() {
    if( this.missed < 4 ){
      document.querySelectorAll('#scoreboard img')[this.missed].src = "images/lostHeart.png";
      this.missed++;
    }else{
      this.gameOver(false);
      this.activePhrase = null;
      this.losses++;
    }
  };

  gameOver(gameWon) {
    if( gameWon ){
      this.overlay.className = "start win slide-in-left";
      document.querySelector('.title').innerHTML = `Great job, you've won!`;
      document.getElementById('game-over-message').innerHTML = `You wanna give it another try?`;
      this.activePhrase = null;
    }else{
      this.overlay.className = "start lose slide-in-left";
      document.querySelector('.title').innerHTML = `Great try!`;
      document.getElementById('game-over-message').innerHTML = `You wanna give it another try?`;
      this.activePhrase = null;
    }
    
    
  };

  clearBoard(){//Clear phrase and reset board
    let li = document.querySelectorAll("#phrase li");//Select phrase display letters
    let ul = document.querySelectorAll("#phrase ul");
    const buttons = document.querySelectorAll("#qwerty button");
    this.missed = 0;//Reset misssed variable
    let loopCap;
    loopCap = (li.length >= buttons.length) ? (loopCap =  li.length) : (loopCap =  buttons.length);//Set max loop

    for (let i = 0; i < loopCap; i++) {//Reset board
      if(i >= 0 && document.querySelectorAll('#scoreboard img')[i]) document.querySelectorAll('#scoreboard img')[i].src = "images/liveHeart.png";
      if(i >= 0 && buttons[i]){
        buttons[i].className ="key";
        buttons[i].disabled = false;
      }
      if(i >= 0 && li[i]) li[i].remove();
      if(i > 0 && ul[i]) ul[i].remove();
    }
    this.overlay.classList = "slide-out-right";
  }
}