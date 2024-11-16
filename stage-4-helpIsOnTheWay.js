const input = require("sync-input");

console.log("H A N G M A N")

const words = ["python", "java", "swift", "javascript"];
const guessWord = words[Math.floor(Math.random() * words.length)];

const user = input(`\`Guess the word ${guessWord.slice(0, 3) + guessWord.slice(3, guessWord.length).replace(/./g, "-")}: `)

//region testingValues
// console.log(`Guess the word ${guessWord.slice(0, 3) + guessWord.slice(3, guessWord.length).replace(/./g, "-")}: > python`);
// const user = "python"
//endregion

if (guessWord === user) {
    console.log("You survived!");
} else {
    console.log("You lost!");
}