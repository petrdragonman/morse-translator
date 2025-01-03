// import data from "./assets/morseCode.json" with {type: "json"};
import { clearTheTextArea } from "./DOM/clearTextArea.js";
import { englishInputElement, translateEnglishToMorse } from "./Maths/fromEnglishToMorse.js";
import { morseInputElement, translateMorseToEnglish } from "./Maths/fromMorseToEnglish.js";


// bi-directional translation between the two textareas
englishInputElement;
morseInputElement;

translateEnglishToMorse();
translateMorseToEnglish();

// to clear the textarea
clearTheTextArea;