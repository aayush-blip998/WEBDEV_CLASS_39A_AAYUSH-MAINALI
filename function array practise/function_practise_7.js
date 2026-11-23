

const WITHDRAWAL_FEE = 25;

const validateWithdrawal = (amount, balance) => {
    if (amount <= 0) {
        return {
            valid: false,
            message: "Amount must be greater than zero."
        };
    }

    if (amount % 500 !== 0) {
        return {
            valid: false,
            message: "Amount must be a multiple of 500."
        };
    }

    if (amount + WITHDRAWAL_FEE > balance) {
        return {
            valid: false,
            message: "Insufficient balance (amount + Rs. 25 fee)."
        };
    }

    return {
        valid: true,
        message: "Withdrawal Successful!"
    };
};

const withdrawMoney = (amount, balance, callback) => {
    console.log(`Account Balance: Rs. ${balance}`);
    console.log(`Withdrawal Amount: Rs. ${amount}`);

    const result = callback(amount, balance);

    if (!result.valid) {
        console.log(`Error: ${result.message}`);
        console.log(`Remaining Balance: Rs. ${balance}`);
        return balance;
    }

    const newBalance = balance - amount - WITHDRAWAL_FEE;

    console.log(result.message);
    console.log(`Transaction Fee: Rs. ${WITHDRAWAL_FEE}`);
    console.log(`Remaining Balance: Rs. ${newBalance}`);

    return newBalance;
};

console.log("\n===== Q7: ATM Withdrawal =====");

let balance = 10000;

balance = withdrawMoney(3000, balance, validateWithdrawal);

console.log("--");

balance = withdrawMoney(1250, balance, validateWithdrawal);

console.log("--");

balance = withdrawMoney(9000, balance, validateWithdrawal);