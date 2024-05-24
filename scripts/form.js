document.addEventListener('DOMContentLoaded', function() {
    // Password matching validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordMessage = document.getElementById('passwordMessage');

    confirmPassword.addEventListener('input', function() {
        if (password.value !== confirmPassword.value) {
            passwordMessage.innerText = 'Passwords do not match';
            passwordMessage.style.color = 'red';
            password.style.border = '1px solid red';
            confirmPassword.style.border = '1px solid red';
        } else {
            passwordMessage.innerText = '';
            password.style.border = '1px solid #ccc';
            confirmPassword.style.border = '1px solid #ccc';
        }
    });

    // Get current year and display in footer
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Get last modified date and display in footer
    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified;
});
