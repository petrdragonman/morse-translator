import data from "./assets/morseCode.json" with {type: "json"};
import { translateEnglishToMorse } from "./Maths/fromEnglishToMorse.js";
import { translateMorseToEnglish } from "./Maths/fromMorseToEnglish.js";
import displayWarning from "./DOM/displayWarning.js";
import removeWarning from "./DOM/removeWarning.js";


// (/^[A-Za-z]+$/)
// regex expression for alphabet only + space + .
const REG = new RegExp("^[A-Za-z. ]+$");
const MORSEREG = new RegExp("^[.-\s]+$");
// Add event listener to input textarea
// bi-directional translation between the two textareas
const englishInputElement = document.getElementById("english");
englishInputElement.addEventListener("input", (event) => {
  removeWarning();
  if(!REG.test(event.target.value)) {
    const warningMessage = "Not an alphabet.";
    displayWarning(warningMessage);
    event.target.value = event.target.value.replace(/[^A-Za-z. ]/g, "");
  }
  translateEnglishToMorse(event.target.value);
});

const morseInputElement = document.getElementById("morse");
morseInputElement.addEventListener("input", (event) => {
  //removeWarning();
  //console.log(event.data.charCodeAt(0));
  // Throw message if you can not find the character in the json
  if(!MORSEREG.test(event.data)) {
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