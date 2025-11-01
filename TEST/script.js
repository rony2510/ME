fetch('translations.json')
  .then(response => response.json())
  .then(translations => {
    const elements = {
      title: document.getElementById('title'),
      description: document.getElementById('description'),
      sectionTitle: document.getElementById('sectionTitle'),
      description2: document.getElementById('description2'),
      actionBtn: document.getElementById('action-btn'),
      footerTitle: document.getElementById('footerTitle'),
      footerText: document.getElementById('footerText')
    };

    const languageSelect = document.getElementById('languageSelect');
    const savedLang = localStorage.getItem('selectedLang') || 'en';

    function updateLanguage(lang) {
      const text = translations[lang];
      document.documentElement.lang = lang; // update <html lang="">
      
      elements.title.textContent = text.title;
      elements.description.textContent = text.description;
      elements.sectionTitle.textContent = text.sectionTitle;
      elements.description2.textContent = text.description2;
      elements.actionBtn.textContent = text.buttonText;
      elements.footerTitle.textContent = text.footerTitle;
      elements.footerText.textContent = text.footerText;

      languageSelect.value = lang;
      localStorage.setItem('selectedLang', lang);
    }

    updateLanguage(savedLang);

    languageSelect.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
