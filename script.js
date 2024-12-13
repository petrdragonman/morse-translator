import data from "./assets/morseCode.json" with {type: "json"};

console.log(data);
console.log(data["A"]);

// (/^[A-Za-z]+$/)
/// regular expressions
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

// Function to perform translation
function translateText() {
  const inputText = document.getElementById('english').value;
  const outputText = document.getElementById('morse');
  
  // regex expression for alphabet only + space + .
  // if (!REG.test(inputText)) {
  //   console.log("Error thrown!");
  //   alert("Alphabets only");
  // }
  // console.log("input text: ", inputText);
  // console.log(`${inputText} ${inputText.length}`);
  if(inputText) {
    const translatedText = fromEnglishToMorse(inputText);
    // Display translated text
    outputText.value = translatedText;
  }
  
}

/*
// Mock translation function (replace with actual API call)
function mockTranslate(text, fromLang, toLang) {
    // This is a simple mock translation (just reverses the text)
    return text.split('').reverse().join('');
}

// Debounce function to limit API calls
function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}

// Function to perform translation
function translateText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    // Perform translation (mock function used here)
    const translatedText = mockTranslate(inputText, 'en', 'es');
    
    // Display translated text
    outputText.value = translatedText;
}

// Add event listener to input textarea
document.getElementById('inputText').addEventListener('input', debounce(translateText, 300));

*/




/* 
// Mock translation function (replace with actual API call)
function mockTranslate(text, fromLang, toLang) {
  // This is a simple mock translation (just reverses the text)
  return text.split('').reverse().join('');
}

function translateText() {
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText');
  
  // Perform translation (mock function used here)
  const translatedText = mockTranslate(inputText, 'en', 'es');
  
  // Display translated text
  outputText.value = translatedText;
}

HTML
<textarea id="inputText" rows="5" cols="30" placeholder="Enter text to translate"></textarea>
<button onclick="translateText()">Translate</button>
<textarea id="outputText" rows="5" cols="30" readonly></textarea>
*/

////////////////////// OLD FIRST /////////////////////
///const inputArea = document.getElementById('english');
////const displayArea = document.getElementById('morse');

// inputArea.addEventListener('input', function() {
//   // this.value += this.value;
//   // this.value = fromEnglishToMorse();
//   // displayArea.value = this.value;
//   console.log(this.value);
//   displayArea.value = fromEnglishToMorse(this.value);
//   // displayArea.value = fromEnglishToMorse();
// });

