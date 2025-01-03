import data from "../assets/morseCode.json" with {type: "json"};
import { clearTheTextArea } from "../DOM/clearTextArea.js";
import displayWarning from "../DOM/displayWarning.js";
import removeWarning from "../DOM/removeWarning.js";

// regex expression for alphabet only + space + .
const REG = new RegExp("^[A-Za-z. ]+$");

export const fromEnglishToMorse = (text) => {
    // to upper case -> split to create array with chars -> map to find coresponding morse letter -> join with space
    return text.toUpperCase().split("").map((char) => data[char]).join(" ");
};

export const translateEnglishToMorse = () => {
    const inputText = document.getElementById('english').value;
    const outputText = document.getElementById('morse');
    
    // regex expression for alphabet only + space + .
    if(inputText) {
      const translatedText = fromEnglishToMorse(inputText);
      outputText.value = translatedText;
    } else {
      outputText.value = "";
    }
};

export const englishInputElement = document.getElementById("english");
englishInputElement.addEventListener("input", (event) => {
  removeWarning();
  event.target.value = event.target.value.toUpperCase();
  if(!REG.test(event.target.value)) {
    if (event.target.value.length > 1) {
      const msg = "Not a morse character."
      displayWarning(msg);
    }
    event.target.value = event.target.value.replace(/[^A-Za-z. ]/g, "").toUpperCase();
  }
  //translateEnglishToMorse(event.target.value);
  translateEnglishToMorse();
});