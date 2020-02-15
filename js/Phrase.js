/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase){
    this.phrase = phrase.phrase.toLowerCase();
    this.rollOut = this.rollOut.bind(this);
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
    this.rollOut(splitPhrase.length, "animate-in");//Call for animation
  };
  rollOut = (i,direction) => {//Handle animations with delay (hoping to replace this with a sass function instead)
    let letters = document.querySelectorAll('.letter');
    console.log(letters[0]);
    setTimeout(function () {//set .10s timeout between each execution of a loop
      if(!i < 0){
        i--; 
        if(document.querySelectorAll(`.animate-in`) && direction === "animate-out"){//if falsey decrement and run conditional
          letters[i].className = letters[i].className.replace(/(?:^|\s)animate-in(?!\S)/g , ' animate-out');//if truthy swap classes
          letters[i].classList = direction;//if falsey simply add the class
        }
      }
      if(i > 0) this.rollOut(i,direction);//If `i` is greater than `0` call rollOut() again passing in current values
    }, 100);
  };
  checkLetter(clckdBtn){
    return (this.phrase.split("").includes(clckdBtn.innerHTML))?true:false;
  };
  
  showMatchedLetter(letter){
    const mtchdLtrLst = document.querySelectorAll(`.${letter}`);
    mtchdLtrLst.forEach(mtchdLtr => {
      mtchdLtr.classList.add("show");
    });
  };
}