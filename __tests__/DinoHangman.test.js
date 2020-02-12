import { DinoHangman } from "../src/DinoHangman";

describe("DinoHangman", () => {
  let hangman;

  beforeEach(() => {
    hangman = new DinoHangman();
  });

  test("should correctly create a hangman object with given word and current letters", () => {
    expect(hangman.word).toEqual("");
    expect(hangman.currentLetters).toEqual([]);
    expect(hangman.fails).toEqual(0);
  });

  test("should add word to hangman object", () => {
    hangman.setWord("hello");
    expect(hangman.word).toEqual("hello");
  });

  test("should add '-' to currentLetters for every letter in the word", () => {
    hangman.setWord("hello");
    expect(hangman.currentLetters).toEqual(["-", "-", "-", "-", "-"]);
  });

  test("should replace '-' in currentLetters with actual letter if guess is correct", () => {
    hangman.setWord("hello");
    hangman.updateCurrentLetters("l");
    expect(hangman.currentLetters).toEqual(["-", "-", "l", "l", "-"]);
  });

  test("should correctly check if player has lost game", () => {
    hangman.fails = 10;
    expect(hangman.loseCheck()).toEqual(true);
  });

  test("should correctly check if player has won game", () => {
    hangman.setWord("hi");
    hangman.currentLetters = ["h", "i"];
    expect(hangman.winCheck()).toEqual(true);
  });
});
