/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase){
    this.phrase = phrase.phrase.toLowerCase();
  }
  addPhraseToDisplay = () => {//Pass in the splitPhrase
    let splitPhrase = this.phrase.split("");//Split and return phrase array
    let word = 0;
    
    for (let i = 0; i < splitPhrase.length; i++) {//Loop through letters in phrase
      let defaultClasses = ["hide","letter", `${splitPhrase[i]}`];
      let li = document.getElementById("phrase").children[word].appendChild(document.createElement("LI"));
      (splitPhrase[i] != " ") ? (li.appendChild(document.createTextNode(splitPhrase[i])), li.classList.add(...defaultClasses))//Style the li
      :(li.classList.add("space"), document.getElementById("phrase").appendChild(document.createElement("UL")), word++);//Count words
    }
    //Update global variable for new letters
    // rollOut(letters.length, "animate-in");//Call for animation
  };

  checkLetter(clckdBtn){
    clckdBtn.disabled = true;
    return (this.phrase.split("").includes(clckdBtn.innerHTML))?true:false;
  };
  
  showMatchedLetter(letter){
    const mtchdLtrLst = document.querySelectorAll(`.${letter}`);
    mtchdLtrLst.forEach(mtchdLtr => {
      mtchdLtr.classList.add("show");
    });
  };
}