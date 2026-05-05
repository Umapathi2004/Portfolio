import { createContext, useContext, useEffect, useState } from 'react';

const SCRIPT_ID  = 'google-translate-script';
const STORAGE_KEY = 'preferred_lang';
const SUPPORTED   = ['en', 'ta', 'hi', 'bn', 'te']; // Extend as needed

const TranslateContext = createContext();
export const useTranslate = () => useContext(TranslateContext);

const getBrowserLang = () => {
  const lang = (navigator.language || 'en').slice(0, 2);
  return SUPPORTED.includes(lang) ? lang : 'en';
};

const applyLanguage = (lang) => {
  if (lang === 'en') {
    // Restore original — trigger Google's restore mechanism
    const frame = document.querySelector('.goog-te-banner-frame');
    if (frame) {
      const restore = frame.contentDocument?.querySelector('.goog-te-banner-close');
      restore?.click();
    }
    // Fallback: reload with no cookie
    const cookie = document.cookie.match(/googtrans=([^;]+)/);
    if (cookie) {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + location.hostname;
      location.reload();
    }
    return;
  }

  const select = document.querySelector('#google_translate_element select');
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event('change'));
  }
};

export const GoogleTranslateProvider = ({ children }) => {
  const [lang, setLang] = useState(
    () => localStorage.getItem(STORAGE_KEY) || getBrowserLang()
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,ta,hi,bn,te', autoDisplay: false },
        'google_translate_element'
      );
      setReady(true);
    };

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id   = SCRIPT_ID;
      script.src  = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      setReady(true);
    }
  }, []);

  // Apply saved/detected language once widget is ready
  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => applyLanguage(lang), 500);
    return () => clearTimeout(timer);
  }, [ready]);

  const switchLang = (newLang) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    setLang(newLang);
    applyLanguage(newLang);
  };

  return (
    <TranslateContext.Provider value={{ lang, switchLang }}>
      {/* Hidden Google widget — required for the engine to work */}
      <div id="google_translate_element" style={{ display: 'none' }} />
      {children}
    </TranslateContext.Provider>
  );
};
