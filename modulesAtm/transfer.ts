import inquirer from "inquirer";
import chalk from "chalk";

async function transfer(balance: number) {
  var again = true;
  do {
    const answer = await inquirer.prompt([
      {
        name: "accountNumber",
        type: "number",
        message: "Enter account number",
      },
      {
        name: "transferAmmount",
        type: "number",
        message: "Enter ammount: ",
      },
    ]);

    if (balance > answer.transferAmmount) {
      balance -= answer.transferAmmount;
      again = false;
    } else {
      console.log(
        chalk.red("You have insuffficient balance.\nTry less ammount")
      );
    }
  } while (again);
  return balance;
}
export default transfer;
