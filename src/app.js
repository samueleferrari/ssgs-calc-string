const readline = require('readline');
const {concat, rmspace, capitols, lowercase} = require('./string');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Wrapper per readline.question che restituisce una Promise
function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}

console.log("Welcome! You can perform concatenation and remove space.");

async function Operation() {
    while (true) {
        console.log("\nPlease select an operation:");
        console.log("1. Concatenation");
        console.log("2. Remove space");
        console.log("3. Upper case");
        console.log("4. Lower case");
        console.log("0. Exit");

        const choice = await askQuestion("Enter your choice: ");

        if (choice === '0') {
            console.log("Thanks for using this app.");
            console.log("Goodbye!");
            rl.close();
            break;
        }
        else if(choice > 4 || choice < 1){
            console.log("Invalid choice. Please try again.");
            continue;
        }

        const firstString = await askQuestion("Enter the first string: ");

        let result;
        switch (choice) {
            case '1':
                const secondString = await askQuestion("Enter the second string: ");
                result = concat(firstString, secondString);
                break;
            case '2':
                result = rmspace(firstString);
                break;
            case '3':
                result = capitols(firstString);
                break;
            case '4':
                result = lowercase(firstString);
                break;
            default:
                console.log("Invalid choice. Please select a valid operation.");
                continue;
        }

        console.log(`Result: ${result}`);
    }
}

Operation();
