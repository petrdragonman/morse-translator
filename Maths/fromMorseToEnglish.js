import data from "../assets/morseCode.json" with {type: "json"};
import displayWarning from "../DOM/displayWarning.js";
import removeWarning from "../DOM/removeWarning.js";

// basic morse code regex
const MORSEREX = new RegExp("^[.-\s]+$"); 
//const MORSEREX = new RegExp("^\s*(?:\s*(?:\.-|-\.\.\.|-\.-\.|-\.\.|\.|\.\.-\.|--\.|\.\.\.\.|\.\.|\.---|-\.-|\.-\.\.|--|-\.|---|\.--\.|--\.-|\.-\.|\.\.\.|-|\.\.-|\.\.\.-|\.--|-\.\.-|-\.--|--\.\.|-----|\.----|\.\.---|\.\.\.--|\.\.\.\.-|\.\.\.\.\.|-\.\.\.\.|--\.\.\.|---\.\.|----\.|\.-\.-\.-|--\.\.--|\.\.--\.\.|\.----\.|-\.-\.--|-\.\.-\.|-\.--\.|-\.--\.-|\.-\.\.\.|---\.\.\.|-\.-\.-\.|-\.\.\.-|\.-\.-\.|-\.\.\.\.-|\.\.--\.-|\.-\.\.-\.|\.\.\.-\.\.-|\.--\.-\.)(?=\s|\s{3}|\s*$))+\s*$");


export const fromMorseToEnglish = (text) => {
  return text.split(" ").map((code) => Object.keys(data).find(key => data[key] === code)).join("");
};

export const translateMorseToEnglish = () => {
  const inputText = document.getElementById("morse").value;
  const outputText = document.getElementById("english");
  // regex
  const translatedText = fromMorseToEnglish(inputText);
  removeWarning();
  if (translatedText) {
    outputText.value = translatedText;
  } else if (inputText.length > 0) {
    const msg = "Not a morse character."
    displayWarning(msg);
  }
  
};

export const morseInputElement = document.getElementById("morse").addEventListener("input", (event) => {
  if(!MORSEREX.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^.-\s]/g, "");
  }
  translateMorseToEnglish(event.target.event);
});