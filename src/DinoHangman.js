export class DinoHangman {
  constructor() {
    this.word = "";
    this.currentLetters = [];
  }

  initializeLetters() {
    for (let i = 0; i < this.length; i++) {
      this.currentLetters.push("-");
    }
  }

  updateCurrentLetters(letter) {
    for (let i = 0; i < this.length; i++) {
      if (this.word[i].toLowerCase() === letter.toLowerCase()) {
        this.currentLetters[i] = letter;
      }
    }
  }

  setWord(word) {
    this.word = word;
    this.initializeLetters();
  }

  get length() {
    return this.word.length;
  }
}
