// script.js

function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var age = document.getElementById('age').value;
    
        var errorMessage = document.getElementById('error-message');
    
        // Simple validation
        if (name.trim() === '' || email.trim() === '' || age.trim() === '') {
            errorMessage.innerHTML = 'All fields are required';
            return;
        }
    
        // Additional validation (e.g., age should be a positive number)
        if (isNaN(age) || age <= 0) {
            errorMessage.innerHTML = 'Please enter a valid age';
            return;
        }
    
        // If all validations pass, you can submit the form or perform other actions
        errorMessage.innerHTML = '';
        alert('Form submitted successfully!');
    }
    