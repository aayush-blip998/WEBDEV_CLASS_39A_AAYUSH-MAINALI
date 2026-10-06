let units_consumed = Number(prompt("Enter the total units consumed"));

if (units_consumed <= 50) {
    console.log(`The bill is Rs. ${units_consumed * 5}`);
}
else if (units_consumed <= 100) {
    console.log(`The bill is Rs. ${units_consumed * 7}`);
}
else if (units_consumed <= 200) {
    console.log(`The bill is Rs. ${units_consumed * 10}`);
}
else {
    console.log(`The bill is Rs. ${units_consumed * 12}`);
}