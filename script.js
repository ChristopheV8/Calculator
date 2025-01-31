function calculate () { // Creates a function and named it calculate with no parameters.
    let num1 = prompt("Enter the first number:"); // Prompt displays a popup asking for a number
    let operator = prompt("Enter an operator (+, -, *, /):"); // Prompt asks for a operator such as (+, -, *, /)
    let num2 = prompt("Enter the second number:"); // Prompt displays a popup asking for a number

    num1 =  parseFloat(num1); // parseFloat converts the string into a decimal number that the computer can read.
    num2 = parseFloat(num2); // parseFloat converts the string into a decimal number that the computer can read.

    if (isNaN(num1) || isNaN(num2)) { // Checks if the imput is a number or any not valid character
        alert ("Go back to school and learn your numbers. "); // alerts the user if any not valid character is used instead of numbers
        return; //stop the function if the invalid input is detected
    }

    let result; // Will store any final calculated ressult
    switch (operator) { // Switch statement is used to hanfle multiple cases based on operator
        case "+": // operator is a +
            result = num1 + num2; // operator is + it adds 'num1' and 'num2'
            break; // stops further execution of the switch block.
        case "-": // operator is a -
            result = num1 - num2; // operator is a - it subtracts 'num1' and 'num2'
            break; // stops further execution of the switch block.
        case "*": // operator is a *
            result = num1 * num2; // operator is a * it multiples 'num1' and 'num2'
            break; // stops further execution of the switch block.
        case "/": // operator is a /
            if (num2 === 0) { // If your try dividing by zero you it will alert you why?
                alert("What are you dividing by, the number of friends you have? ");
                return; // outputts the answer corrispoding 
            }
            result = num1 / num2; // Operator is a / and it divides 'num1' and 'num2'
            break; // stops further execution of the switch block.
        default: // if not switch is found because you did not use an operator
             alert("Dummy. Please use +, -, *, or /"); // if you do not use one of the proper operators it lets you know.
             return; //alerts and tells you that you need to use a valid operator
    }
    
    document.getElementById("result").innerHTML = `
        <h2>Calculation Result</h2>
        <p>${num1} ${operator} ${num2} = <strong>${result}</strong></p>
    `;
}
calculate();
