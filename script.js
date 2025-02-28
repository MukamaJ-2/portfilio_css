document.addEventListener('DOMContentLoaded', function() {
    // Get the mode text and icon elements
    const modeText = document.querySelector('.mode-text');
    const modeIcon = document.querySelector('.mode-icon');
    
    // Force light mode by default (remove any saved theme)
    localStorage.setItem('theme', 'light');
    
    // Set initial state to light mode
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
    }
    
    // Set initial text and icon
    modeText.textContent = 'Dark';
    modeIcon.textContent = '🌙';
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-switch');
    
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Update button text and icon based on current mode
      if (document.body.classList.contains('dark-mode')) {
        modeText.textContent = 'Light';
        modeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        modeText.textContent = 'Dark';
        modeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    });
  });