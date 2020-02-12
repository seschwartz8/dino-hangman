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

  guessLetter(letter) {
    for (let i = 0; i < this.length; i++) {
      if (this.word[i] === letter) {
        this.currentLetters[i] = letter;
      }
    }
  }
}
