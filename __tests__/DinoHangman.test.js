import { DinoHangman } from "../src/DinoHangman";

describe("DinoHangman", () => {
  let hangman;

  beforeEach(() => {
    hangman = new DinoHangman("hello");
  });

  test("should correctly create a DinoHangman object with given word and current letters", () => {
    expect(hangman.word).toEqual("hello");
    expect(hangman.length).toEqual(hangman.word.length);
    expect(hangman.currentLetters).toEqual(["-", "-", "-", "-", "-"]);
  });

  test("should replace '-' in currentLetters with actual letter if guess is correct", () => {
    hangman.updateCurrentLetters("l");
    expect(hangman.currentLetters).toEqual(["-", "-", "l", "l", "-"]);
  });
});
