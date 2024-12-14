import data from "./assets/morseCode.json" with {type: "json"};
//import { fromEnglishToMorse } from "./Maths/fromEnglishToMorse.js";
import { translateEnglishToMorse } from "./Maths/fromEnglishToMorse.js";
//import { fromMorseToEnglish } from "./Maths/fromMorseToEnglish.js";
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

//////////////////////////////////////////////////
const morseInputElement = document.getElementById("morse");
morseInputElement.addEventListener("input", (event) => {
  if(!MORSEREX.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^.-\s]/g, "");
  }
  translateMorseToEnglish(event.target.event);
});
////////////////////////////////////////////////////
// const morseInputElement = document.getElementById("morse").addEventListener("input", (event) => {
//   if(!MORSEREX.test(event.target.value)) {
//     event.target.value = event.target.value.replace(/[^.-\s]/g, "");
//   }
//   translateMorseToEnglish(event.target.event);
// });
// morseInputElement();

//////////////////////////////////
//fromEnglishToMorse(text); ///////////////////////////////////////////////////////////////////////////////////////////////
// const fromEnglishToMorse = (text) => {
//   // to upper case -> split to create array with chars -> map to find coresponding morse letter -> join with space
//   return text.toUpperCase().split("").map((char) => data[char]).join(" ");
// };
//////////////////////////////////

///////////////////////////////////////////
translateEnglishToMorse();
// const translateEnglishToMorse = () => {
//   const inputText = document.getElementById('english').value;
//   const outputText = document.getElementById('morse');
  
//   // regex expression for alphabet only + space + .
//   if(inputText) {
//     const translatedText = fromEnglishToMorse(inputText);
//     // Display translated text
//     outputText.value = translatedText;
//   }
// };
//////////////////////////////////////////////
translateMorseToEnglish();
// const translateMorseToEnglish = () => {
//   const inputText = document.getElementById("morse").value;
//   const outputText = document.getElementById("english");
//   // regex
//   const translatedText = fromMorseToEnglish(inputText);
//   outputText.value = translatedText;
// };
//////////////////////////////////////////////

//fromMorseToEnglish(text); //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////
// const fromMorseToEnglish = (text) => {
//   return text.split(" ").map((code) => Object.keys(data).find(key => data[key] === code)).join("");
//   // ".- .. .-. ....... - . -- .--. . .-. .- - ..- .-. ."; // air remperature
// };
///////////////////////////////////

// to clear the textarea
const clearTheTextArea = document.getElementById("btn").addEventListener("click", () => {
  let inputText = document.getElementById('english');
  let outputText = document.getElementById('morse');
  console.log("clearing the text area!");
  outputText.value = "";
  inputText.value = "";
});

/*
morse example
.... . .-.. .-.. ---   .-- --- .-. .-.. -.. --..--   - .... .. ...   .. ...   .-   -- --- .-. ... .   -.-. --- -.. .   . -..- .- -- .--. .-.. .

Breakdown:
H = ....
E = .
L = .-..
L = .-..
O = ---
(space between words)
W = .--
O = ---
R = .-.
L = .-..
D = -..
(space)
T = -
H = ....
I = ..
S = ...
(space)
I = ..
S = ...
(space)
A = .-
(space)
M = --
O = ---
R = .-.
S = ...
E = .
(space)
C = -.-.
O = ---
D = -..
E = .
(space)
E = .
X = -..-
A = .-
M = --
P = .--.
L = .-..
E = .
*/