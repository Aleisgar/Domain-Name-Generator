/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my", "an"];
  let adj = ["great", "big", "blue", "random"];
  let noun = ["jogger", "racoon", "cat", "place"];

  function domains() {
    for (let i of pronoun) {
      for (let j of adj) {
        for (let k of noun) {
          console.log(i + j + k + ".com");
        }
      }
    }
  }

  document.querySelector("#dominio").innerHTML = domains();
};
