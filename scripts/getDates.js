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

    // Dark mode button functionality
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const mainContent = document.querySelector('main');

    darkModeBtn.addEventListener('click', function() {
        mainContent.classList.toggle('dark-mode');
        mainContent.classList.toggle('light-mode');
        if (mainContent.classList.contains('dark-mode')) {
            darkModeBtn.textContent = 'Modo Claro';
        } else {
            darkModeBtn.textContent = 'Modo Escuro';
        }
    });
});
// siteplan.js

// Function to redirect to chamber-site-plan.html
function redirectToSitePlan() {
    window.location.href = 'chamber-site-plan.html';
}

// Event listener for the site plan button
document.getElementById('site-plan-btn').addEventListener('click', redirectToSitePlan);
// Verifica se o contador de visitas está armazenado no localStorage
let pageVisits = localStorage.getItem('pageVisits');

// Se não houver, define o contador como 0
if (!pageVisits) {
    pageVisits = 0;
} else {
    // Se houver, converte para número
    pageVisits = parseInt(pageVisits);
}

// Incrementa o contador de visitas
pageVisits++;

// Atualiza o contador de visitas no localStorage
localStorage.setItem('pageVisits', pageVisits);

// Exibe o contador de visitas na página
document.getElementById('page-visit-counter').textContent = pageVisits;
