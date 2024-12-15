import data from "../assets/morseCode.json" with {type: "json"};

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
      // Display translated text
      outputText.value = translatedText;
    }
};

export const englishInputElement = document.getElementById("english");
englishInputElement.addEventListener("input", (event) => {
  if(!REG.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^A-Za-z. ]/g, "");
  }
  translateEnglishToMorse(event.target.value);
});