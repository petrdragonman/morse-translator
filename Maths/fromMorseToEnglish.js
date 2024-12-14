import data from "../assets/morseCode.json" with {type: "json"};

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