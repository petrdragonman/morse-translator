import data from "./assets/morseCode.json" with {type: "json"};


// (/^[A-Za-z]+$/)
// regex expression for alphabet only + space + .
const REG = new RegExp("^[A-Za-z. ]+$");
const MORSEREX = new RegExp("^[.-\s]+$");



// Add event listener to input textarea
// bi-directional translation between the two textareas
// document.getElementById("english").addEventListener('input', translateText);
const englishInputElement = document.getElementById("english");
englishInputElement.addEventListener("input", (event) => {
  ///const regex = /^[A-Za-z. ]+$/;
  if(!REG.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^a-z. ]/g, "");
  }
  translateText(event.target.value);
});

const morseInputElement = document.getElementById("morse");
morseInputElement.addEventListener("input", (event) => {
  //const regex = ("[.-]{1,5}(?> [.-]{1,5})*(?>   [.-]{1,5}(?> [.-]{1,5})*)*");
  ///const regex = /[.-]*/;
  if(!MORSEREX.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^.-\s]/g, "");
  }
  translateMorseToEnglish(event.target.event);
});

const fromEnglishToMorse = (text) => {
  // to upper case -> split to create array with chars -> map to find coresponding morse letter -> join with space
  return text.toUpperCase().split("").map((char) => data[char]).join(" ");
};

// to perform translation
function translateText() {
  const inputText = document.getElementById('english').value;
  const outputText = document.getElementById('morse');
  
  // regex expression for alphabet only + space + .
  if(inputText) {
    const translatedText = fromEnglishToMorse(inputText);
    // Display translated text
    outputText.value = translatedText;
  }
}

const translateMorseToEnglish = () => {
  const inputText = document.getElementById("morse").value;
  const outputText = document.getElementById("english");
  // regex
  const translatedText = fromMorseToEnglish(inputText);
  outputText.value = translatedText;
};

const fromMorseToEnglish = (text) => {
  //const result = text.split(" ");
  return text.split(" ").map((code) => Object.keys(data).find(key => data[key] === code)).join("");
  // ".- .. .-. ....... - . -- .--. . .-. .- - ..- .-. ."; // air remperature
};

// to clear the textarea
const clearTheTextArea = document.getElementById("btn").addEventListener("click", () => {
  let inputText = document.getElementById('english');
  let outputText = document.getElementById('morse');
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