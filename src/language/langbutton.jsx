// import { useLanguage } from "../../language/lang";

// export const LanguageButton = () => {
//   const { language, toggleLanguage } = useLanguage();
//   const [buttonText, setButtonText] = useState("Language");

//   useEffect(() => {
//     setButtonText(language === "en" ? "English" : "Українська");
//   }, [language]);

//   return (
//     <button className="lang" onClick={toggleLanguage}>
//       {buttonText}
//     </button>
//   );
// };

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../language/lang';

export const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguage();
  const [buttonText, setButtonText] = useState('Language');

  useEffect(() => {
    setButtonText(language === 'en' ? 'English' : 'Українська');
  }, [language]);

  return (
    <button className="lang" onClick={toggleLanguage}>
      {buttonText}
    </button>
  );
};