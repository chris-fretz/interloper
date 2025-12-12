const body = document.body;
const themeToggle = document.getElementById('dark-mode-toggle');

// Helper function to apply the necessary logic
function handleThemeToggleClick() {
  body.classList.toggle('light');
    
  // Check the *new* state after toggling
  if (body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// Function that attaches the event listener
function initThemeToggle() {
    // Check if the themeToggle element was found (prevents the TypeError)
    if (themeToggle) {
        themeToggle.addEventListener('click', handleThemeToggleClick);
    } else {
        console.error("Error: Could not find element with ID 'dark-mode-toggle'");
    }
}

// Wait for the DOM to be fully loaded before running initThemeToggle()
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
});
