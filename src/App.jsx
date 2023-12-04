import React from "react";
import "./App.css";
import { Hero } from "./sections/hero";
import { Main } from "./sections/main";
import { Footer } from "./sections/footer";
import { LanguageProvider, useLanguage } from "./language/lang";


export const App = () => {
   return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};
  
  const AppContent = () => {
    const { toggleLanguage } = useLanguage();
  
  return (
    <>
     
      <button className="lang" onClick={toggleLanguage}>Language</button>
      <Hero />
      <Main />
      <Footer />
    </>
      
  );
};

