import inquirer from "inquirer";
import cashwithdraw from "./cashWithdraw.js";
import cashDepo from "./cashDeposit.js";
import transfer from "./transfer.js";
import utility from "./utilitybills.js";
import chalk from "chalk";
async function AnotherTransaction() {
    const anotherTransaction = await inquirer.prompt([
        {
            name: "anothertransaction",
            type: "list",
            message: "Do you want to do another transaction?",
            choices: ["yes", "no"],
        },
    ]);
    return anotherTransaction.anothertransaction;
}
async function mainScreen(balance) {
    do {
        const options = await inquirer.prompt([
            {
                name: "menu",
                type: "list",
                message: "Please select your transaction type.",
                choices: [
                    "Balance Inquiry",
                    "Cash withdraw",
                    "Cash deposit",
                    "Transfer",
                    "Utility bill",
                    "Exit",
                ],
            },
        ]);
        switch (options.menu) {
            case "Balance Inquiry":
                console.log(chalk.yellow(`Your current Balance: ${balance}`));
                break;
            case "Cash withdraw":
                balance = await cashwithdraw(balance);
                break;
            case "Cash deposit":
                balance = await cashDepo(balance);
                break;
            case "Transfer":
                balance = await transfer(balance);
                break;
            case "Utility bill":
                balance = await utility(balance);
                break;
            case "Exit":
                anotherTrans = "no";
                break;
        }
        if (options.menu != "Exit") {
            console.log(chalk.green(`Your transaction was successful. New balance is ${balance}`));
            var anotherTrans = await AnotherTransaction();
        }
        if (anotherTrans === "no") {
            console.log("Thanks for using our services\nHave a nice day.");
        }
    } while ((await anotherTrans) != "no");
}
export default mainScreen;
