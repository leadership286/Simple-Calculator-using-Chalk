import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("Welcome to Simple Calculator"));
let answer = await inquirer.prompt([
    {
        name: 'firstNumber', type: "number", message: chalk.yellow('Enter First Number')
    },
    {
        name: 'secondNumber', type: 'number', message: chalk.blue("Enter Second Number")
    },
    {
        name: 'operator', type: "list", message: chalk.green('Kindly Select anyone option from given below:'),
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
if (answer.operator === "Addition") {
    console.log(chalk.green(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.blue(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.magenta(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === 'Division') {
    console.log(chalk.redBright(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.red("Invalid input"));
}
console.log(answer);
