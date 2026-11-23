

const getFoodPrice = (foodName) => {
    const menu = {
        burger: 250,
        pizza: 500,
        momo: 150,
        chowmein: 180
    };

    const price = menu[foodName.toLowerCase()];

    return price === undefined ? null : price;
};

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, callback) => {
    const price = callback(foodName);

    return price === null ? null : price * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    const foodAmount = callback(foodName, quantity);

    if (foodAmount === null) {
        console.log(`Sorry ${customerName}, "${foodName}" is not on the menu.`);
        return;
    }

    const serviceCharge = calculateServiceCharge(foodAmount);

    console.log(`Customer: ${customerName}`);
    console.log(`Food: ${foodName}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Food Amount: Rs. ${foodAmount}`);
    console.log(`Service Charge: Rs. ${serviceCharge}`);
    console.log(`Final Amount: Rs. ${foodAmount + serviceCharge}`);
};

console.log("\n===== Q8: Restaurant Receipt =====");

const orderCallback = (food, qty) =>
    calculateOrder(food, qty, getFoodPrice);

generateReceipt("Suman", "Burger", 2, orderCallback);
generateReceipt("Suman", "Sushi", 1, orderCallback);