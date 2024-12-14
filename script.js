import data from "./assets/morseCode.json" with {type: "json"};
import { translateEnglishToMorse } from "./Maths/fromEnglishToMorse.js";
import { translateMorseToEnglish } from "./Maths/fromMorseToEnglish.js";


// (/^[A-Za-z]+$/)
// regex expression for alphabet only + space + .
const REG = new RegExp("^[A-Za-z. ]+$");
const MORSEREX = new RegExp("^[.-\s]+$");

// Add event listener to input textarea
// bi-directional translation between the two textareas
const englishInputElement = document.getElementById("english");
englishInputElement.addEventListener("input", (event) => {
  if(!REG.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^A-Za-z. ]/g, "");
  }
  translateEnglishToMorse(event.target.value);
});

const morseInputElement = document.getElementById("morse");
morseInputElement.addEventListener("input", (event) => {
  if(!MORSEREX.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^.-\s]/g, "");
  }
  translateMorseToEnglish(event.target.event);
});

translateEnglishToMorse();

translateMorseToEnglish();

// to clear the textarea
const clearTheTextArea = document.getElementById("btn").addEventListener("click", () => {
  let inputText = document.getElementById('english');
  let outputText = document.getElementById('morse');
  console.log("clearing the text area!");
  outputText.value = "";
  inputText.value = "";
});