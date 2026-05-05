import { useState } from 'react';
import { useTranslate } from './GoogleTranslateProvider';

const LANGUAGES = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'ta', label: 'TA', full: 'தமிழ்' },
  { code: 'hi', label: 'HI', full: 'हिन्दी' },
  { code: 'bn', label: 'BN', full: 'বাংলা' },
  { code: 'te', label: 'TE', full: 'తెలుగు' },
];

export const LanguageSwitcher = () => {
  const { lang, switchLang } = useTranslate();
  const [expanded, setExpanded] = useState(false);

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <div className={`lang-float ${expanded ? 'lang-float--expanded' : ''}`} translate="no">
      <button
        className="lang-float__trigger notranslate"
        onClick={() => setExpanded(!expanded)}
        title="Change Language"
      >
        <span className="lang-float__label">{currentLang.full}</span>
        <i className={`fa-solid fa-chevron-${expanded ? 'down' : 'up'}`}></i>
      </button>

      {expanded && (
        <div className="lang-float__menu">
          {LANGUAGES.map(({ code, label, full }) => (
            <button
              key={code}
              className={`lang-float__option notranslate${lang === code ? ' lang-float__option--active' : ''}`}
              onClick={() => {
                switchLang(code);
                setExpanded(false);
              }}
            >
              <span className="lang-float__text">{full}</span>
              <span className="lang-float__badge">{label}</span>
              {lang === code && <i className="fa-solid fa-check"></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
