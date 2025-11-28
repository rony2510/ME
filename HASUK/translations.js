fetch('translations.json')
  .then(response => response.json())
  .then(translations => {
    const elements = {

        // every declared id of json here
        // description: document.getElementById('description')
        rightsName: document.getElementById('rightsName'),
        titlenameNav: document.getElementById('titlenameNav')
      
      
    };

    const languageSelect = document.getElementById('languageSelect');
    const savedLang = localStorage.getItem('selectedLang') || 'en';

    function updateLanguage(lang) {
      const text = translations[lang];
      document.documentElement.lang = lang; // update <html lang="">

      
     
      // Update browser tab title dynamically
      document.title = text.titlename;

    // described elements
    //   elements.description.textContent = text.description;
    elements.rightsName.textContent=text.rightsName;
    elements.titlenameNav.textContent=text.titlenameNav






    

      languageSelect.value = lang;
      localStorage.setItem('selectedLang', lang);
    }

    updateLanguage(savedLang);

    languageSelect.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
