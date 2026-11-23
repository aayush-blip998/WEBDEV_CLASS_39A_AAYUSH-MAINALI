

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => b === 0 ? null : a / b;

const calculate = (a, b, operationCallback) =>
    operationCallback(a, b);

const show = (label, symbol, a, b, result) => {
    if (result === null) {
        console.log(
            `${label}: ${a} ${symbol} ${b} = Error (division by zero is not allowed)`
        );
    } else {
        console.log(`${label}: ${a} ${symbol} ${b} = ${result}`);
    }
};

console.log("\n===== Q10: Calculator =====");

show("Addition", "+", 20, 10, calculate(20, 10, add));

show("Subtraction", "-", 20, 10, calculate(20, 10, subtract));

show("Multiplication", "*", 20, 10, calculate(20, 10, multiply));

show("Division", "/", 20, 10, calculate(20, 10, divide));

show("Division", "/", 20, 0, calculate(20, 0, divide));