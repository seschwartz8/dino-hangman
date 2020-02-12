export class DinoHangman {
  constructor() {
    this.word = "";
    this.currentLetters = [];
    this.fails = 0;
  }

  setWord(word) {
    this.word = word;
    this.initializeLetters();
  }

  get length() {
    return this.word.length;
  }

  initializeLetters() {
    this.currentLetters = [];
    for (let i = 0; i < this.length; i++) {
      this.currentLetters.push("-");
    }
  }

  updateCurrentLetters(letter) {
    let letterFound = false;
    for (let i = 0; i < this.length; i++) {
      if (this.word[i].toLowerCase() === letter.toLowerCase()) {
        this.currentLetters[i] = letter;
        letterFound = true;
      }
    }
    if (!letterFound) this.fails++;
  }

  loseCheck() {
    return this.fails === 10 ? true : false;
  }

  winCheck() {
    return this.currentLetters.join("") === this.word.toLowerCase()
      ? true
      : false;
  }
}
