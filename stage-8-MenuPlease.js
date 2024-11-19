// UDS - Uncomment During Submission

//region UDS
const input = require("sync-input");
//endregion

const correctLetters = 'abcdefghijklmnopqrstuvwxyz';

console.log(`H A N G M A N`);

const words = ["python", "java", "swift", "javascript"];

let wins = 0;
let loss = 0;

let menuChoice = '';

//region testingValues
// let menuChoiceTest = ["play", "results", "exit"];
// let j = 0;
//endregion

while (menuChoice !== "exit") {

    //region testingValues
    // console.log(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: > ${menuChoiceTest[j]}`);
    // menuChoice = menuChoiceTest[j];
    // j++;
    //endregion

    //region UDS
    menuChoice = input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
    //endregion

    if (menuChoice === "play") {
        let tries = 8;

        //region UDS
        const guessWord = words[Math.floor(Math.random() * words.length)];
        //endregion

        //region testingValue
        // const guessWord = "python";
        // const trial1 = ["h", "K", "t", "o", "+", "K", "h", "K", "n", "q", "y", "h", "p"]; // Sample 1 : for "python" example and also uncomment the guessWord to "javascript"
        // let i = 0;
        //endregion

        let guessList = Array.from(guessWord.replace(/./g, "-"));
        let usedWords = "";

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
                console.log(`\nYou guessed the word ${guessWord}!\nYou survived!`);
                wins += 1;
                break;
            } else if (tries === 0) {
                console.log("\nYou lost!");
                loss += 1;
                break;
            }
            usedWords += user;
        }
    }
    else if (menuChoice === "results") {
        console.log(`You won: ${wins} times.\nYou lost: ${loss} times.`);
    }
}
