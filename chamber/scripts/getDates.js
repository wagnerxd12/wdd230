// Visit message functionality
const currentDate = new Date();
let lastVisitDate = localStorage.getItem('lastVisitDate');

if (!lastVisitDate) {
    lastVisitDate = currentDate;
    localStorage.setItem('lastVisitDate', lastVisitDate);
    displayMessage("Welcome! Let us know if you have any questions.");
} else {
    lastVisitDate = new Date(lastVisitDate);
    
    const diffTime = Math.abs(currentDate - lastVisitDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        displayMessage("Back so soon! Awesome!");
    } else {
        displayMessage(`You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`);
    }
}

function displayMessage(message) {
    const visitMessage = document.querySelector('.visit-message');
    visitMessage.textContent = message;
}

// Other functionalities
document.addEventListener('DOMContentLoaded', function() {
    // Get current year and display in footer
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Get last modified date and display in footer
    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified;

    // Hamburger menu functionality
    const btn = document.getElementById('hamburger-btn');
    const nav = document.querySelector('nav ul');

    btn.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});




