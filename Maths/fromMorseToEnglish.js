import data from "../assets/morseCode.json" with {type: "json"};

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
  outputText.value = translatedText;
};

export const morseInputElement = document.getElementById("morse").addEventListener("input", (event) => {
  if(!MORSEREX.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^.-\s]/g, "");
  }
  translateMorseToEnglish(event.target.event);
});