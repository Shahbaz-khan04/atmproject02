import inquirer from "inquirer";

async function cashDepo(balance : number){

    const Ammount = await inquirer.prompt([{
        name: "ammount",
        type: "number",
        message: "Enter ammount you want to deposit: "
    }]);
    
    return balance;
}

export default cashDepo;