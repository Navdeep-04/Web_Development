function appendChar(char) {
    const display = document.getElementById("display");
    const expression = document.getElementById("expression");
    display.value += char;  // Append character to the display
    expression.value = display.value;  // Show expression
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("expression").value = ""; // Clear expression
}

function deleteChar() {
    const display = document.getElementById("display");
    const expression = document.getElementById("expression");
    display.value = display.value.slice(0, -1);  // Remove last character from display
    expression.value = display.value;  // Update expression
}

function calculate() {
    const display = document.getElementById("display");
    const expression = document.getElementById("expression");
    try {
        const result = eval(display.value);  // Evaluate the expression
        display.value = result;  // Display the result
        expression.value = expression.value + " = " + result;  // Update the expression with result
    } catch {
        display.value = "Error";  // Handle errors
    }
}
