import { Hero } from "./sections/hero";
import { Main } from "./sections/main";
import { Footer } from "./sections/footer";
import { LanguageProvider } from "./language/lang";
import { LanguageButton } from "./language/langbutton";

import "./App.css";


export const App = () => {
   return (
    <LanguageProvider>
     <LanguageButton/>
      <Hero />
      <Main />
      <Footer />
    </LanguageProvider>
  );
};


