

// to clear the textarea
export const clearTheTextArea = document.getElementById("btn").addEventListener("click", () => {
    let inputText = document.getElementById('english');
    let outputText = document.getElementById('morse');
    console.log("clearing the text area!");
    outputText.value = "";
    inputText.value = "";
  });