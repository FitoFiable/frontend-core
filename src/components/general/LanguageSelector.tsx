import { useState, useEffect } from 'react';
import { getCurrentLanguage, getLanguageByCode, supportedLanguages, type LanguageCode } from '@/lib/language';
import {apiSetUserLanguage} from '@/lib/core-api';
const languages = supportedLanguages;

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<typeof languages[number]>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // First, try to detect language from URL
    const detectLanguageFromUrl = (): LanguageCode => {
      const pathSegments = window.location.pathname.split('/').filter(segment => segment !== '');
      const langFromUrl = pathSegments[0];
      const supportedCodes = languages.map(lang => lang.code);
      
      if (supportedCodes.includes(langFromUrl as LanguageCode)) {
        return langFromUrl as LanguageCode;
      }
      return 'en';
    };

    // Get language from URL first, then fallback to saved/detected language
    const urlLanguage = detectLanguageFromUrl();
    const currentLanguageCode = urlLanguage !== 'en' ? urlLanguage : getCurrentLanguage();
    const language = getLanguageByCode(currentLanguageCode);
    
    // Save the detected language to localStorage
    localStorage.setItem('language', currentLanguageCode);
    
    // Update the HTML lang attribute
    document.documentElement.lang = currentLanguageCode;
    
    setSelectedLanguage(language);
  }, []);

  const handleLanguageChange = async (language: typeof languages[number]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    
    // Save to localStorage
    localStorage.setItem('language', language.code);
    
    // Update the HTML lang attribute
    document.documentElement.lang = language.code;
    
    // Persist user language preference to backend before navigation
    const langResp = await apiSetUserLanguage(language.code);
    console.log(langResp);
    
    // Update URL to new language path
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    
    // Replace the first segment (language code) with the new language
    if (pathSegments.length > 0 && languages.some(lang => lang.code === pathSegments[0])) {
      // Current path has a language code, replace it
      pathSegments[0] = language.code;
    } else {
      // Current path doesn't have a language code, prepend it
      pathSegments.unshift(language.code);
    }
    
    const newPath = '/' + pathSegments.join('/');
    
    // Dispatch custom event for other components to listen to (before navigation)
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: language.code } 
    }));
    
    // Navigate after dispatching the event
    window.location.href = newPath;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-selector flex items-center gap-2 px-3 py-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border hover:bg-accent transition-all duration-200 shadow-lg"
        aria-label="Select language"
      >
        <span className="text-sm font-medium">{selectedLanguage.code.toUpperCase()}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-xl z-50 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={async () => await handleLanguageChange(language)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-accent transition-colors duration-150 ${
                  selectedLanguage.code === language.code ? 'bg-accent/50' : ''
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{language.name}</span>
                  <span className="text-xs text-muted-foreground">{language.code.toUpperCase()}</span>
                </div>
                {selectedLanguage.code === language.code && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
