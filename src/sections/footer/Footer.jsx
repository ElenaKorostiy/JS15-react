import { PARAMS } from "../../storage/const";
import { useLanguage } from "../../language/lang";

import "./Footer.css"



export const Footer = () => {
   const { language } = useLanguage();

    return (
 <div className="basis-section">
    <div className="skills-section">
          <h1 id={PARAMS.Skills}>{language === 'en' ? "Skills" : "Навички"}</h1> 
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
      </ul>
    </div>
    <div className="experience-section">
          <h1 id={PARAMS.Experience}>{language === 'en' ? "Experience" : "Досвід"}</h1> 
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
      </ul>
    </div>
    <div className="projects-section">
    <h1 id={PARAMS.Projects}>{language === 'en' ? "Projects" : "Проєкти"}</h1> 
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
      </ul>
    </div>
    <div className="sport-section">
          <h1 id={PARAMS.Hobby}>{language === 'en' ? "Hobby" : "Хоббі"}</h1> 
      <ul>
        <li>Swimming</li>
        <li>Bicycle</li>
        <li>Walks with the dog</li>
        <li>Traveling</li>
      </ul>
    </div>       
</div>    
  );
};