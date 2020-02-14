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
    this.activePhrase = new Phrase(this.phrases[random]);
    
    return this.activePhrase;
  };

  startGame(){
    this.clearBoard();
    this.getRandomPhrase().addPhraseToDisplay();
    document.getElementById("overlay").style.display = "none";
  };

  handleInteraction(clckdBtn){
    if( this.activePhrase.checkLetter(clckdBtn) ){ 
      clckdBtn.classList = 'chosen';
      this.activePhrase.showMatchedLetter(clckdBtn.innerHTML);
      this.checkForWin();
    }else{
      clckdBtn.classList = 'wrong';
      this.removeLife();
    }
  };

  checkForWin(){
    const phrase = document.querySelectorAll('.letter');
    const guessed = document.querySelectorAll('.show');
    if( guessed.length === phrase.length ){
      this.gameOver(true);
      this.wins++;
    }    
  };

  removeLife() {
    if( this.missed < 4 ){
      document.querySelectorAll('#scoreboard img')[this.missed].src = "images/lostHeart.png";
      this.missed++;
    }else{
      this.overlay.style.display = "";
      this.overlay.className = "lose";
      document.querySelector('.title').innerHTML = `Great try!`;
      document.getElementById('game-over-message').innerHTML = `You wanna give it another try?`;
      this.losses++;
    }
  };

  gameOver(gameWon) {
    if( gameWon ){
      this.overlay.style.display = "";
      this.overlay.className = "win";
      document.querySelector('.title').innerHTML = `Great job, you've won!`;
      document.getElementById('game-over-message').innerHTML = `You wanna give it another try?`;
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
    // overlay.className = "start slide-out-right";
  }
}