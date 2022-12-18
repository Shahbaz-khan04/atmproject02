import inquirer from "inquirer";
import chalk from "chalk";
async function otherAmmount(balance) {
    const otherAmt = await inquirer.prompt([
        {
            name: "otherAmmount",
            type: "number",
            message: "Enter ammount: ",
        },
    ]);
    if (otherAmt.otherAmmount < balance) {
        balance -= otherAmt.otherAmmount;
    }
    else {
        console.log(chalk.red("You have insufficient balance."));
        balance = await otherAmmount(balance);
    }
    return balance;
}
async function cashwithdraw(balance) {
    const answer = await inquirer.prompt([
        {
            name: "ammount",
            type: "list",
            message: "Please select ammount: ",
            choices: ["500", "1000", "2000", "5000", "10000", "Otherammount"],
        },
    ]);
    switch (answer.ammount) {
        case "500":
            if (balance > Number(answer.ammount)) {
                balance -= 500;
                console.log(chalk.yellow(`Your new balance is: ${balance}`));
            }
            else {
                console.log(chalk.red("You have insufficient balance."));
            }
            break;
        case "1000":
            if (balance > Number(answer.ammount)) {
                balance -= 1000;
                console.log(chalk.yellow(`Your new balance is: ${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance."));
            }
        case "2000":
            if (balance > Number(answer.ammount)) {
                balance -= 2000;
                console.log(chalk.yellow(`Your new balance is: ${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance."));
            }
        case "5000":
            if (balance > Number(answer.ammount)) {
                balance -= 5000;
                console.log(chalk.yellow(`Your new balance is: ${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance."));
            }
        case "10000":
            if (balance > Number(answer.ammount)) {
                balance -= 10000;
                console.log(chalk.yellow(`Your new balance is: ${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance."));
            }
        case "Otherammount":
            balance = await otherAmmount(balance);
            console.log(chalk.yellow(`Your new balance is: ${balance}`));
            break;
    }
    return balance;
}
export default cashwithdraw;
