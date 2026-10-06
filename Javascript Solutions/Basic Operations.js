function square_operation(number) {
    return number * number;
}

function cube_operation(number) {
    return number * number * number;
}

let operation = prompt("Which operation do you want? (square/cube)");
let number = Number(prompt("Enter a number:"));

if (operation === "square") {
    console.log("Result:", square_operation(number));
} 
else if (operation === "cube") {
    console.log("Result:", cube_operation(number));
} 
else {
    console.log("Invalid operation");
}