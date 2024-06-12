function generatePoem(event) {
    event.preventDefault();
}
let poemElement = document.querySelector("#poem");

import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#poem', {
  strings: ["When you finally, after deep illness, lay"],
  autoStart: true,
  delay: 1,
  cursor: "",
});


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);