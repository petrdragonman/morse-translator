import data from "./assets/morseCode.json" with {type: "json"};

console.log(data);
console.log(data["A"]);

// (/^[A-Za-z]+$/)
// regex expression for alphabet only + space + .
const REG = new RegExp("^[A-Za-z. ]+$");


// Add event listener to input textarea
// document.getElementById("english").addEventListener('input', translateText);
const inputElement = document.getElementById("english");
inputElement.addEventListener("input", (event) => {
  const regex = /^[A-Za-z. ]+$/;
  if(!REG.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^a-z. ]/g, "");
  }
  //console.log(event.target.value);
  translateText(event.target.value);
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

// to clear the textarea
const clearTheTextArea = document.getElementById("btn").addEventListener("click", () => {
  let inputText = document.getElementById('english');
  let outputText = document.getElementById('morse');
  outputText.value = " ";
  inputText.value = " ";
});