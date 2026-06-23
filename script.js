// =========================================
// THEME TOGGLE FUNCTIONALITY
// =========================================

function toggleTheme() {
    // Get the current theme
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    
    // Switch between light and dark
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply the new theme
    html.setAttribute('data-theme', newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('preferred-theme', newTheme);
}

// =========================================
// LOAD SAVED THEME ON PAGE LOAD
// =========================================

window.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('preferred-theme');
    
    if (savedTheme) {
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference (optional)
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }
});