export class DinoHangman {
  constructor(word) {
    this.word = word;
    this.length = this.word.length;
    this.currentLetters = this.initializeLetters();
  }

  initializeLetters() {
    let letters = [];
    for (let i = 0; i < this.length; i++) {
      letters.push("-");
    }
    return letters;
  }

  updateCurrentLetters(letter) {
    for (let i = 0; i < this.length; i++) {
      if (this.word[i].toLowerCase() === letter.toLowerCase()) {
        this.currentLetters[i] = letter;
      }
    }
  }
}
