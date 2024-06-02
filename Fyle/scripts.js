// Wait for the document to be fully loaded before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    const form = document.querySelector('form');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values entered by the user
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate the username and password
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
        } else {
            // Display a success message
            alert(`Welcome, ${username}! You are now logged in.`);
            // Clear the form fields
            form.reset();
        }
    });

    // Add an event listener for the "Forgot password?" link
    const forgotPasswordLink = document.querySelector('a[href="#"]');
    forgotPasswordLink.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Display a message to the user
        alert('Please contact support to reset your password.');
    });
});
