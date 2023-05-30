

//business logic
function add (num1 , num2) {
    return num1 + num2;
}

//user interface logic
const num1 = parseInt(prompt("enter a number"));
const num2 = parseInt(prompt ("enter my num"));

window.alert(add(num1, num2));

//business logic 
function sub (num3, num4) {
    return num3 - num4;
}

const num3 = parseInt(prompt("Enter a Number:"))
const num4 = parseInt(prompt("Enter another Number:"))
window.alert(sub(num3, num4));