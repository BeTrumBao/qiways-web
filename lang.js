function setLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('qiways_lang', lang);
}

function toggleLang() {
    const currentLang = document.documentElement.lang || 'vi';
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    setLang(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('qiways_lang') || 'vi';
    setLang(savedLang);
});
