const themeButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    if (!themeButton || !themeIcon) return;

    themeButton.setAttribute('aria-pressed', String(isDark));
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    themeIcon.innerHTML = isDark
        ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'
        : '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>';
}

themeButton.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark');
    setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

localStorage.removeItem('language');
setTheme(localStorage.getItem('theme') === 'dark');

const cvSubject = 'CV request';
const cvEmailBody = 'Hello Emanuele,\n\nI would like to request your CV.\n\nMy name is: ';
const cvWhatsAppMessage = 'Hello Emanuele, I would like to request your CV. My name is: ';
const cvEmailLink = document.getElementById('cv-email-link');
if (cvEmailLink) {
    cvEmailLink.href =
        `mailto:emanueleragusi@proton.me?subject=${encodeURIComponent(cvSubject)}&body=${encodeURIComponent(cvEmailBody)}`;
}
const cvWhatsAppLink = document.getElementById('cv-whatsapp-link');
if (cvWhatsAppLink) {
    cvWhatsAppLink.href =
        `https://wa.me/393317495100?text=${encodeURIComponent(cvWhatsAppMessage)}`;
}

const progressBar = document.getElementById('progress-bar');
function updateProgress() {
    if (!progressBar) return;

    const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('active'));
}
