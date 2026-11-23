

const heading = (text) => console.log(`\n===== ${text} =====`);

// ---------------------------------------------------------------
// Question 1: Smart Electricity Bill Calculator
// ---------------------------------------------------------------
const calculateBill = (units) => {
  const serviceFee = 50;
  let charge = 0;

  if (units <= 20) {
    charge = units * 5;
  } else if (units <= 50) {
    charge = 20 * 5 + (units - 20) * 7;
  } else {
    charge = 20 * 5 + 30 * 7 + (units - 50) * 10;
  }
  return charge + serviceFee;
};

// calculateBill does the maths; displayBill only displays.
const displayBill = (name, units, callback) => {
  const bill = callback(units);
  console.log(`Customer: ${name}`);
  console.log(`Units Consumed: ${units}`);
  console.log(`Total Electricity Bill: Rs. ${bill}`);
};

heading("Q1: Electricity Bill");
displayBill("Ram", 65, calculateBill);

// ---------------------------------------------------------------
// Question 2: Student Result Processing System
// ---------------------------------------------------------------
const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

const getDivision = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

// Callback decides the division from the average.
// processResult calculates the average, then hands it to the callback.
const processResult = (name, m1, m2, m3, callback) => {
  const average = calculateAverage(m1, m2, m3);
  const division = callback(average);
  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};

heading("Q2: Student Result");
processResult("Sita", 70, 75, 80, getDivision);

// ---------------------------------------------------------------
// Question 3: Online Shopping Discount System
// ---------------------------------------------------------------
const calculateDiscount = (amount) => {
  if (amount >= 5000) return 20;
  if (amount >= 3000) return 15;
  if (amount >= 1000) return 10;
  return 0;
};

const calculateFinalPrice = (amount, discount) =>
  amount - (amount * discount) / 100;

// The discount result is passed on to the callback that finds the final price.
const checkout = (customerName, amount, callback) => {
  const discount = calculateDiscount(amount);
  const finalPrice = callback(amount, discount);
  console.log(`Customer: ${customerName}`);
  console.log(`Original Price: Rs. ${amount}`);
  console.log(`Discount: ${discount}%`);
  console.log(`Final Price: Rs. ${finalPrice}`);
};

heading("Q3: Shopping Discount");
checkout("Nikesh", 6000, calculateFinalPrice);

// ---------------------------------------------------------------
// Question 4: Movie Ticket Booking System
// ---------------------------------------------------------------
const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200;
};

const calculateTotal = (price, quantity) => price * quantity;

// Returns the discount amount (10% when 5 or more tickets).
const applyDiscount = (total, quantity) => (quantity >= 5 ? total * 0.1 : 0);

// The discount is applied AFTER the total is known.
const bookTicket = (name, age, quantity, callback) => {
  const price = getTicketPrice(age);
  const total = calculateTotal(price, quantity);
  const discount = callback(total, quantity);
  console.log(`Customer: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Tickets: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${total}`);
  console.log(`Discount: Rs. ${discount}`);
  console.log(`Final Amount: Rs. ${total - discount}`);
};

heading("Q4: Movie Ticket");
bookTicket("Hari", 25, 5, applyDiscount);

// ---------------------------------------------------------------
// Question 5: Employee Salary Processing System
// ---------------------------------------------------------------
const calculateBonus = (salary) =>
  salary >= 40000 ? salary * 0.1 : salary * 0.05;

const calculateTax = (salary) => salary * 0.05;

// Two callbacks, both used in ONE calculation.
const calculateNetSalary = (salary, bonusCallback, taxCallback) =>
  salary + bonusCallback(salary) - taxCallback(salary);

const generatePayslip = (name, salary, callback) => {
  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${calculateBonus(salary)}`);
  console.log(`Tax: Rs. ${calculateTax(salary)}`);
  console.log(`Net Salary: Rs. ${callback(salary)}`);
};

heading("Q5: Salary Payslip");
generatePayslip("Ram", 50000, (salary) =>
  calculateNetSalary(salary, calculateBonus, calculateTax)
);

// ---------------------------------------------------------------
// Question 6: Food Delivery Charge Calculator
// ---------------------------------------------------------------
const calculateDelivery = (distance) =>
  distance <= 2 ? 30 : 30 + (distance - 2) * 15;

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

// If delivery is free, the callback is never run (no needless calculation).
const processOrder = (customer, distance, orderAmount, callback) => {
  const charge = checkFreeDelivery(orderAmount) ? 0 : callback(distance);
  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${charge}`);
};

heading("Q6: Food Delivery");
processOrder("Shyam", 5, 800, calculateDelivery);
processOrder("Gita", 5, 1200, calculateDelivery); // free delivery

// ---------------------------------------------------------------
// Question 7: ATM Withdrawal System
// ---------------------------------------------------------------
const WITHDRAWAL_FEE = 25;

// Returns an object so the caller gets both the result and the reason.
const validateWithdrawal = (amount, balance) => {
  if (amount <= 0) {
    return { valid: false, message: "Amount must be greater than zero." };
  }
  if (amount % 500 !== 0) {
    return { valid: false, message: "Amount must be a multiple of 500." };
  }
  if (amount + WITHDRAWAL_FEE > balance) {
    return { valid: false, message: "Insufficient balance (amount + Rs. 25 fee)." };
  }
  return { valid: true, message: "Withdrawal Successful!" };
};

// Returns the NEW balance. On failure it returns the original balance,
// so the balance never changes.
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

heading("Q7: ATM Withdrawal");
let balance = 10000;
balance = withdrawMoney(3000, balance, validateWithdrawal); // success
console.log("--");
balance = withdrawMoney(1250, balance, validateWithdrawal); // not a multiple of 500
console.log("--");
balance = withdrawMoney(9000, balance, validateWithdrawal); // too much

// ---------------------------------------------------------------
// Question 8: Restaurant Order Management System
// ---------------------------------------------------------------
const getFoodPrice = (foodName) => {
  const menu = { burger: 250, pizza: 500, momo: 150, chowmein: 180 };
  const price = menu[foodName.toLowerCase()];
  return price === undefined ? null : price; // null = invalid item
};

const calculateServiceCharge = (total) => total * 0.05;

// Callback finds the unit price; this function returns the food amount.
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

heading("Q8: Restaurant Receipt");
const orderCallback = (food, qty) => calculateOrder(food, qty, getFoodPrice);
generateReceipt("Suman", "Burger", 2, orderCallback);
generateReceipt("Suman", "Sushi", 1, orderCallback); // invalid item

// ---------------------------------------------------------------
// Question 9: Mobile Recharge System
// ---------------------------------------------------------------
// Returns an actual money amount (not a percentage), so the next
// step is a simple addition.
const calculateBonusAmount = (amount) => {
  if (amount >= 1000) return amount * 0.15;
  if (amount >= 500) return amount * 0.1;
  if (amount >= 100) return amount * 0.05;
  return 0;
};

const calculateTotalBalance = (amount, bonus) => amount + bonus;

const recharge = (number, amount, callback) => {
  const bonus = callback(amount);
  console.log(`Mobile Number: ${number}`);
  console.log(`Recharge Amount: Rs. ${amount}`);
  console.log(`Bonus Received: Rs. ${bonus}`);
  console.log(`Total Balance: Rs. ${calculateTotalBalance(amount, bonus)}`);
};

heading("Q9: Mobile Recharge");
recharge("9800000000", 1000, calculateBonusAmount);

// ---------------------------------------------------------------
// Question 10: Smart Function Based Calculator
// ---------------------------------------------------------------
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? null : a / b); // null = cannot divide

// calculate() does not need to know WHICH operation it runs.
// New operations can be added without changing it.
const calculate = (a, b, operationCallback) => operationCallback(a, b);

const show = (label, symbol, a, b, result) => {
  if (result === null) {
    console.log(`${label}: ${a} ${symbol} ${b} = Error (division by zero is not allowed)`);
  } else {
    console.log(`${label}: ${a} ${symbol} ${b} = ${result}`);
  }
};

heading("Q10: Calculator");
show("Addition", "+", 20, 10, calculate(20, 10, add));
show("Subtraction", "-", 20, 10, calculate(20, 10, subtract));
show("Multiplication", "*", 20, 10, calculate(20, 10, multiply));
show("Division", "/", 20, 10, calculate(20, 10, divide));
show("Division", "/", 20, 0, calculate(20, 0, divide)); // division by zero
