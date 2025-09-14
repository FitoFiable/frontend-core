// Language utility functions

export const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
] as const;

export type LanguageCode = typeof supportedLanguages[number]['code'];

/**
 * Detect browser language preference
 * @returns The detected language code or 'en' as default
 */
export function detectBrowserLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en';
  
  // Get browser languages in order of preference
  const browserLanguages = navigator.languages || [navigator.language];
  
  // Check each browser language against our supported languages
  for (const browserLang of browserLanguages) {
    // Try exact match first (e.g., 'en-US' -> 'en')
    const exactMatch = supportedLanguages.find(lang => 
      browserLang.toLowerCase().startsWith(lang.code.toLowerCase())
    );
    if (exactMatch) return exactMatch.code;
    
    // Try language code only (e.g., 'en' from 'en-US')
    const langCode = browserLang.split('-')[0].toLowerCase();
    const codeMatch = supportedLanguages.find(lang => 
      lang.code.toLowerCase() === langCode
    );
    if (codeMatch) return codeMatch.code;
  }
  
  // Default to English if no match found
  return 'en';
}

/**
 * Get the current language from localStorage or detect from browser
 * @returns The current language code
 */
export function getCurrentLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en';
  
  const savedLanguage = localStorage.getItem('language');
  const isValidLanguage = supportedLanguages.some(lang => lang.code === savedLanguage);
  
  if (isValidLanguage) {
    return savedLanguage as LanguageCode;
  }
  
  // If no valid saved language, detect from browser
  const detectedLanguage = detectBrowserLanguage();
  
  // Save the detected language for future visits
  localStorage.setItem('language', detectedLanguage);
  
  return detectedLanguage;
}

/**
 * Get the language object by code
 * @param code - The language code
 * @returns The language object or the default English language
 */
export function getLanguageByCode(code: string) {
  return supportedLanguages.find(lang => lang.code === code) || supportedLanguages[0];
}

/**
 * Listen for language changes
 * @param callback - Function to call when language changes
 * @returns Cleanup function to remove the listener
 */
export function onLanguageChange(callback: (language: LanguageCode) => void) {
  if (typeof window === 'undefined') return () => {};
  
  const handleLanguageChange = (event: CustomEvent) => {
    callback(event.detail.language);
  };
  
  window.addEventListener('languageChanged', handleLanguageChange as EventListener);
  
  return () => {
    window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
  };
}
