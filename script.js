// Get the display element and all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Check if the button is a "C" (clear) button
        if (button.classList.contains("clear")) {
            display.value = ""; // Clear the display
        }
        // Check if the button is an "=" (equal) button
        else if (button.classList.contains("equal")) {
            try {
                // Evaluate the expression in the display and show the result
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error"; // Show "Error" if there's an issue with evaluation
            }
        }
        // If it's not a special button, append its text content to the display
        else {
            display.value += button.textContent;
        }
    });
});
