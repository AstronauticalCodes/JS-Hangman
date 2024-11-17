const input = require("sync-input");

const tries = 8;

console.log(`H A N G M A N`)

const words = ["python", "java", "swift", "javascript"];
const guessWord = words[Math.floor(Math.random() * words.length)];

let guessList = Array.from(guessWord.replace(/./g, "-"));

//region testingValue
// const trial1 = ["a", "i", "o", "z", "l", "p", "h", "k"]; // Sample 1
// const trial2 = ["j", "i", "g", "o", "a", "v", "a", "j"]; // sample 2
//endregion

for (let i = 0; i < 8; i++) {
    console.log("\n" + guessList.join(""));
    let user = input("Input a letter: ");

    //region testingValues
    // console.log(`Input a letter: > ${trial2[i]}`);
    // let user = trial2[i];
    //endregion

    if (guessWord.includes(user)) {
        for (let j = 0; j < guessWord.length; j++) {
            if (guessWord[j] === user) {
                guessList[j] = user;
            }
        }
    } else {
        console.log("That letter doesn't appear in the word.")
    }
}

console.log("\nThanks for playing!")