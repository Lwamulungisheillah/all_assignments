// number 1
function calculateSum(num1, num2) {
    return num1 + num2;
}
// random numbers
const result = calculateSum(5, 10);
console.log(result); // Output: 15


//number 2
function squareNumbers() {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        const squared = square(i);
        result += `${i} squared is ${squared}\n`;
    }
    return result;
}

function square(num) {
    return num * num;
}

// tryin out my function on random numbers
const squareResult = squareNumbers();
console.log(squareResult); // Output: Result will be displayed in console

function findMaxOfThreeNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const num3 = parseFloat(prompt("Enter the third number:"));
    const max = maxOfThree(num1, num2, num3);
    return `The maximum of ${num1}, ${num2}, and ${num3} is ${max}`;
}

function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Example usage:
const maxResult = findMaxOfThreeNumbers();
console.log(maxResult); // Output: Result will be displayed in console
