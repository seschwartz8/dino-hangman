import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { DinoHangman } from "./DinoHangman";

function guessLetter(letter, obj) {
  obj.updateCurrentLetters(letter);
  $("#letter-display").text(obj.currentLetters);
  $(`#${letter}`).prop("disabled", true);
}

$(document).ready(function() {
  let newDino = new DinoHangman("Hello");
  $("#letter-display").text(newDino.currentLetters);

  $(".letters").click(function(event) {
    event.preventDefault();
    guessLetter(this.id, newDino);
  });
});
