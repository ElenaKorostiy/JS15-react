import { useLanguage } from './lang';

export const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguage();
   return (
    <button className="lang" onClick={toggleLanguage}>
      {language === "en" ? "ukr" : "en"}
    </button>
  );
};