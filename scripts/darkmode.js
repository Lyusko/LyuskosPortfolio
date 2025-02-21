const toggleButton = document.getElementById('dark-mode-toggle');
const modeIcon = document.getElementById('mode-icon');

// Check if user has a saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    modeIcon.classList.remove('fa-moon'); // Remove moon icon
    modeIcon.classList.add('fa-sun');    // Add sun icon (for dark mode)
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle the icons
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.classList.remove('fa-moon'); // Remove moon icon
        modeIcon.classList.add('fa-sun');     // Add sun icon (for dark mode)
        localStorage.setItem('darkMode', 'enabled');
    } else {
        modeIcon.classList.remove('fa-sun');  // Remove sun icon
        modeIcon.classList.add('fa-moon');    // Add moon icon (for light mode)
        localStorage.setItem('darkMode', 'disabled');
    }
});
