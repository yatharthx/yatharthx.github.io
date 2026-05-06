(function() {
  const html = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }

  function handleToggle() {
    const isDark = html.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  }

  // Initialize theme immediately to prevent flash
  setTheme(getPreferredTheme());

  // Attach event listeners after DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const toggleHeader = document.getElementById('dark-mode-toggle-header');
    const toggleFooter = document.getElementById('dark-mode-toggle-footer');

    if (toggleHeader) {
      toggleHeader.addEventListener('click', handleToggle);
    }

    if (toggleFooter) {
      toggleFooter.addEventListener('click', handleToggle);
    }
  });
})();
