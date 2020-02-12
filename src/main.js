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

function displayFails(hangman) {
  $("#fail-counter").empty();
  if (hangman.winCheck()) {
    $("#fail-counter").append(`<div class="dino-win"></div>`);
  } else {
    if (!hangman.loseCheck()) {
      $("#fail-counter").text("Failed Attempts:");
      for (let i = 0; i < hangman.fails; i++) {
        $("#fail-counter").append(`<div class="dino-fail"></div>`);
      }
    } else {
      $("#fail-counter").append(`<div class="final-failure"></div>`);
    }
  }
}

function guessLetter(letter, hangman) {
  hangman.updateCurrentLetters(letter);
  displayWord(hangman);
  $(`#${letter}`).prop("disabled", true);
  if (hangman.loseCheck()) {
    $(`.letters`).prop("disabled", true);
    $("#letter-display").append(
      `<br>${hangman.word
        .toLowerCase()
        .split("")
        .join(" ")}`
    );
  } else {
    if (hangman.winCheck()) {
      $(`.letters`).prop("disabled", true);
    }
  }
}

function newGame(hangman) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const word = data[0][0];
      hangman.setWord(word);
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
    hangman.resetFails();
    $("#fail-counter").empty();
    $("#fail-counter").text("Failed Attempts:");
    $(".letter-buttons").show();
    $(`.letters`).prop("disabled", false);
  });

  $(".letters").click(function(event) {
    event.preventDefault();
    guessLetter(this.id, hangman);
    displayFails(hangman);
  });
});
