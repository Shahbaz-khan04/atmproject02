import inquirer from "inquirer";
const electricBill = Math.ceil(Math.random() * 1000 + 1);
const gasBill = Math.ceil(Math.random() * 1000 + 1);
const phoneBill = Math.ceil(Math.random() * 1000 + 1);
async function utility(balance) {
    const input = await inquirer.prompt([
        {
            name: "typeOfBill",
            type: "list",
            message: "Select type of bill: ",
            choices: ["electricBill", "gasBill", "phoneBill"],
        },
    ]);
    if (input.typeOfBill === "electricBill") {
        console.log(`Your Electric bill ammount is: ${electricBill}`);
        balance -= electricBill;
    }
    else if (input.typeOfBill === "gasBill") {
        console.log(`Your Gas bill ammount is: ${gasBill}`);
        balance -= gasBill;
    }
    else if (input.typeOfBill === "phoneBill") {
        console.log(`Your Phone bill ammount is: ${phoneBill}`);
        balance -= phoneBill;
    }
    return balance;
}
export default utility;
