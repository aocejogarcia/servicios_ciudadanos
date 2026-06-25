const themeToggle = document.getElementById('dark-mode-toggle');
const savedTheme = localStorage.getItem('theme');
const body = document.body;

const setTheme = theme => {
  const dark = theme === 'dark';
  body.classList.toggle('dark-mode', dark);
  themeToggle.checked = dark;
};

const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(initialTheme);

themeToggle.addEventListener('change', () => {
  const nextTheme = themeToggle.checked ? 'dark' : 'light';
  setTheme(nextTheme);
  localStorage.setItem('theme', nextTheme);
});
