import data from "../assets/morseCode.json" with {type: "json"};

export const fromMorseToEnglish = (text) => {
    return text.split(" ").map((code) => Object.keys(data).find(key => data[key] === code)).join("");
    // ".- .. .-. ....... - . -- .--. . .-. .- - ..- .-. ."; // air remperature
};

// export if(!MORSEREX.test(event.target.value)) {
//     event.target.value = event.target.value.replace(/[^.-\s]/g, "");
//   }
//   translateMorseToEnglish(event.target.event);


export const translateMorseToEnglish = () => {
      const inputText = document.getElementById("morse").value;
      const outputText = document.getElementById("english");
      // regex
      const translatedText = fromMorseToEnglish(inputText);
      outputText.value = translatedText;
    };