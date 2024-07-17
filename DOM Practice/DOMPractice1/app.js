// Practice Problem 1: Changing Text Content
// Objective: Create a button that, when clicked, changes the text content of a paragraph.
// Steps:
// Create an HTML file with a button and a paragraph.
// Add a script that selects the button and paragraph elements.
// Add an event listener to the button that changes the paragraph's text content when clicked.

// Retrieve relevant elements
let text = document.getElementById("text");
let btn = document.getElementById("changeTextButton");

btn.addEventListener("click", () => {
    text.innerHTML = "I have altered this text!";
});

