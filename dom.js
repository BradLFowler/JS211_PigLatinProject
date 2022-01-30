const pigLatin = (word) => {

    const myVowels = ["a", "e", "i", "o", "u"]
  
    word = word.toLowerCase().trim();
  
    for (let i = 0; i < word.length; i++) {
  
      if (myVowels.includes(word[0])) {
        return word + 'yay'
      } else if (myVowels.includes(word[1]))  {
        let simpleWord = word.substring(1);
        let startingLetter = word[0];
        return simpleWord + startingLetter + 'ay'
      } else (myVowels.includes(word[2])); {
        let complexWord = word.substring(2);
        let startingLetter = word[0];
        let secondLetter = word[1];
        return complexWord + startingLetter + secondLetter + 'ay'
      }
  
    }

}

let input = "";

const textInput = document.getElementById("textInput");
const button = document.getElementById("button");
const reset = document.getElementById("reset");
const textOutput = document.getElementById("textOutput");
const pigButton = document.getElementById("pigButton");
const piggieButton = document.getElementById("piggieButton");

console.log();

textInput.addEventListener("keyup", (event) => {
  input = event.target.value;
  console.log(input);
});

button.addEventListener("click", (e) => {
  let words = input.split(" ");
  let pigWord = words.map((word) => pigLatin(word)).join(" ");
  textOutput.innerText = pigWord;
});

reset.addEventListener("click", (e) => {
  textInput.value = "";
  textOutput.innerText = "";
  input = "";
  console.log("click");
});

pigButton.addEventListener("mousedown", (e) => {
  pigButton.classList.remove("pig-button");
  pigButton.classList.add("pig-button2");
  let words = input.split(" ");
  let pigWord = words.map((word) => pigLatin(word)).join(" ");
  textOutput.innerText = pigWord;
});

pigButton.addEventListener("mouseup", (e) => {
  pigButton.classList.remove("pig-button2");
  pigButton.classList.add("pig-button");
});

piggieButton.addEventListener('click', (e) => {
    window.alert(" OINK!!! ");
    let words = input.split(" ");
    let pigWord = words.map((word) => pigLatin(word)).join(" ");
    textOutput.innerText = pigWord;
});
