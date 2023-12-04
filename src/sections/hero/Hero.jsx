import "./Hero.css";
import foto from "./../../assets/photo_2023-11-05_14-24-49.jpg";
import { useLanguage } from "../../language/lang";

export const Hero = () => {
    const { language } = useLanguage();
  console.log();
  return (
      <header>
       <div className="photo-container">
              <img  className="photo" src={foto} alt="My Photo" />
       </div>
          <div className="text">
            <p className="Hello">{language === 'en' ? 'Hello I`m Elena Korosty.' : 'Привіт я Олена Коростій'}</p>
            <p className="future">{language === 'en' ? 'I am a future developer' : 'Я майбутній розробник'}</p>
          </div>
         
      </header>
      
  );
};