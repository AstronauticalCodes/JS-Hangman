const input = require("sync-input");

let tries = 8;

console.log(`H A N G M A N`);

const words = ["python", "java", "swift", "javascript"];
const guessWord = words[Math.floor(Math.random() * words.length)];

//region testingValues
// const guessWord = "python";
// const guessWord = "java";
//endregion

let guessList = Array.from(guessWord.replace(/./g, "-"));
let usedWords = "";

//region testingValue
// const trial1 = ["t", "z", "t", "t", "y", "x", "y", "p", "p", "q", "p"]; // Sample 1 : for "python" example and also uncomment the guessWord to "python"
// const trial1 = ["j", "i", "g", "g", "g", "g", "a", "v"]; // sample 2 : for "java" example and also uncomment the guessWord to "java"
//endregion

let i = 0;
while (tries > 0) {
    console.log("\n" + guessList.join(""));
    let user = input("Input a letter: ");

    //region testingValues
    // console.log(`Input a letter: > ${trial1[i]}`);
    // let user = trial1[i];
    //endregion

    if (guessWord.includes(user) && !guessList.includes(user)) {
        for (let j = 0; j < guessWord.length; j++) {
            if (guessWord[j] === user) {
                guessList[j] = user;
                usedWords += user;
            }
        }
    } else if (guessList.includes(user)) {
        tries--;
        console.log(`No improvements.  // ${tries} attempts`);
    } else {
        tries--;
        console.log(`That letter doesn't appear in the word.  // ${tries} attempts`);
    }

    if (guessList.join("") === guessWord) {
        console.log(`\n${guessWord}\nYou guessed the word!\nYou survived!`);
        break;
    } else if (tries === 0) {
        console.log("\nYou lost!");
        break;
    }
    i++;
}