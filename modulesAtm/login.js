import inquirer from "inquirer";
import users from "./users.js";
import mainScreen from "./mainScreen.js";
async function login() {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Please enter your Account number",
        },
        {
            name: "pin",
            type: "password",
            message: "Please enter your PIN code",
        },
    ]);
    let user = users.find((x) => x.accountNumber === answer.accountNumber && x.pinCode === answer.pin);
    if (typeof user != "undefined") {
        console.log(`Logged in.\nWelcome ${user.name}`);
        mainScreen(user.balance);
    }
    else {
        console.log("You have entered incorrect pin or account number");
    }
}
export default login;
