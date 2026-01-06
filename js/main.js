// Check for saved theme preference or default to light mode
const getTheme = () => {
    return localStorage.getItem('theme') || 'light';
};

const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    const html = document.documentElement;

    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setTheme(getTheme());

    document.getElementById('themeToggle').addEventListener('click', () => {
        const currentTheme = getTheme();
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
});

// Contact form handler: opens user's email client with prefilled subject/body
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);

    const mailto = `mailto:gohanpeter@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
}