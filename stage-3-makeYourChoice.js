// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
// const input = require('sync-input')

const user = input("H A N G M A N\nThe game will be available soon.");

const words = ["python", "java", "swift", "javascript"];
const randomWord = words[Math.floor(Math.random() * words.length)];

if (user === randomWord) {
    console.log("You survived!");
} else {
    console.log("You lost!");
}