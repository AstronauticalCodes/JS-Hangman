// UDS - Uncomment During Submission

//region UDS
const input = require("sync-input");
//endregion

let tries = 8;
const correctLetters = 'abcdefghijklmnopqrstuvwxyz';

console.log(`H A N G M A N`);

const words = ["python", "java", "swift", "javascript"];
//region UDS
const guessWord = words[Math.floor(Math.random() * words.length)];
//endregion

//region testingValues
// const guessWord = "javascript";
// const guessWord = "java";
//endregion

let guessList = Array.from(guessWord.replace(/./g, "-"));
let usedWords = "";

//region testingValue
// const trial1 = ["a", "i", "o", "o", "p", "p", "h", "k", "a", "z", "t", "x", "b", "d", "w"]; // Sample 1 : for "python" example and also uncomment the guessWord to "javascript"
// const trial1 = ["j", "i", "+", "A", "ii", "++", "", "g", "a", "v"]; // sample 2 : for "java" example and also uncomment the guessWord to "java"
// let i = 0;
//endregion

while (tries > 0) {
    console.log("\n" + guessList.join(""));
    //region UDS
    let user = input("Input a letter: ");
    //endregion

    //region testingValues
    // console.log(`Input a letter: > ${trial1[i]}`);
    // let user = trial1[i];
    // i++;
    //endregion

    if (user.length !== 1) {
        console.log("Please, input a single letter.");
        continue;
    } else if (!correctLetters.includes(user)) {
        console.log("Please, enter a lowercase letter from the English alphabet.");
        continue;
    } else if (usedWords.includes(user)) {
        console.log("You've already guessed this letter.");
        continue;
    }

    if (guessWord.includes(user)) {
        for (let j = 0; j < guessWord.length; j++) {
            if (guessWord[j] === user) {
                guessList[j] = user;
            }
        }
    } else {
        tries--;
        console.log(`That letter doesn't appear in the word.`);
    }

    if (guessList.join("") === guessWord) {
        console.log(`You guessed the word ${guessWord}!\nYou survived!`);
        break;
    } else if (tries === 0) {
        console.log("\nYou lost!");
        break;
    }
    usedWords += user;
}