

const calculateBonusAmount = (amount) => {
    if (amount >= 1000) return amount * 0.15;
    if (amount >= 500) return amount * 0.1;
    if (amount >= 100) return amount * 0.05;
    return 0;
};

const calculateTotalBalance = (amount, bonus) =>
    amount + bonus;

const recharge = (number, amount, callback) => {
    const bonus = callback(amount);

    console.log(`Mobile Number: ${number}`);
    console.log(`Recharge Amount: Rs. ${amount}`);
    console.log(`Bonus Received: Rs. ${bonus}`);
    console.log(`Total Balance: Rs. ${calculateTotalBalance(amount, bonus)}`);
};

console.log("\n===== Q9: Mobile Recharge =====");

recharge("9800000000", 1000, calculateBonusAmount);