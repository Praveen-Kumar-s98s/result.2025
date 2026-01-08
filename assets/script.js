// ============================================
// Login Form Handler
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get the login form element
    const loginForm = document.getElementById('loginForm');
    
    // Valid credentials
    const VALID_REGISTER_NUMBER = '4320441';
    const VALID_DATE_OF_BIRTH = '02-07-2006';
    const VALID_DATE_OF_BIRTH_ALT = '02/07/2006'; // Also accept slash format
    
    // If login form exists, add submit event listener
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();
            
            // Get form values
            const registerNumber = document.getElementById('registerNumber').value.trim();
            const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
            
            // Validate Register Number
            if (registerNumber !== VALID_REGISTER_NUMBER) {
                alert('Invalid Register Number. Please enter the correct Register Number.');
                document.getElementById('registerNumber').focus();
                return;
            }
            
            // Validate Date of Birth (accept both dash and slash formats)
            if (dateOfBirth !== VALID_DATE_OF_BIRTH && dateOfBirth !== VALID_DATE_OF_BIRTH_ALT) {
                alert('Invalid Date of Birth. Please enter the correct Date of Birth.');
                document.getElementById('dateOfBirth').focus();
                return;
            }
            
            // If validation passes, redirect to result page
            window.location.href = 'result.html';
        });
    }
});

// ============================================
// Additional functionality can be added here
// ============================================

