
function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        if (b === 0) {
            return "Cannot divide by zero";
        }

        return a / b;
    } else {
        return "Invalid operator";
    }
}

console.log(calculate(20, 10, "+"));
console.log(calculate(20, 10, "-"));
console.log(calculate(20, 10, "*"));
console.log(calculate(20, 10, "/"));
console.log(calculate(20, 0, "/"));

