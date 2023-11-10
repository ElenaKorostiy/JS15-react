import "./Hero.css";
import foto from "./../../assets/photo_2023-11-05_14-24-49.jpg";

export const Hero = () => {
  console.log();
  return (
      <header>
       <div className="photo-container">
              <img  className="photo" src={foto} alt="My Photo" />
       </div>
          <div className="text">
              <p className="Hello">Hello, I`m  Elena Korosty.</p>
              <p className="future">i am a future developer</p>
          </div>
         
      </header>
      
  );
};