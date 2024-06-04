import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

const answers = await inquirer.prompt([
  {
    name: "guessedNumber",
    type: "number",
    message: "Guess a number from 1 to 10",
  },
]);

if (answers.guessedNumber === randomNumber) {
  console.log(`Congratulations! You have guessed the right number.`);
} else {
  console.log(`You have guessed the wrong number!`);
}
