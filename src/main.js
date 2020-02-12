import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { DinoHangman } from "./DinoHangman";

const url =
  "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1";

function displayWord(hangman) {
  const currentLettersString = hangman.currentLetters.join(" ");
  console.log(currentLettersString);
  $("#letter-display").text(currentLettersString);
}

function guessLetter(letter, hangman) {
  hangman.updateCurrentLetters(letter);
  displayWord(hangman);
  $(`#${letter}`).prop("disabled", true);
}

function newGame(hangman) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const word = data[0][0];
      hangman.setWord(word);
      console.log(hangman);
    })
    .then(function() {
      displayWord(hangman);
    });
}

$(document).ready(function() {
  let hangman = new DinoHangman();
  $(".letter-buttons").hide();

  $("#new-game").click(function(event) {
    event.preventDefault();
    newGame(hangman);
    $(".letter-buttons").show();
    $(`.letters`).prop("disabled", false);
  });

  $(".letters").click(function(event) {
    event.preventDefault();
    guessLetter(this.id, hangman);
  });
});
