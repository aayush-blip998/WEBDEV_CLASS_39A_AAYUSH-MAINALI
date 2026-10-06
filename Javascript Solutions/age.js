let age = Number(prompt("Enter your age:"));

if (age < 13) {
    console.log("You are a child.");
}
else if (age <= 19) {
    console.log("You are a teenager.");
}
else if (age <= 59) {
    console.log("You are an adult.");
}
else {
    console.log("You are a senior citizen.");
}