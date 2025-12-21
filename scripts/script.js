// scripts/script.js
const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check of er een voorkeur is opgeslagen in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (toggle) toggle.checked = true;
}

if (toggle) {
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Sla voorkeur op
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // Sla voorkeur op
        }
    });
}