import data from "../assets/morseCode.json" with {type: "json"};
import displayWarning from "../DOM/displayWarning.js";
import removeWarning from "../DOM/removeWarning.js";

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
        displayWarning("Not a morse character.")
      }
      
    };