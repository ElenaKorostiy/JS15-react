import { PARAMS } from "../../storage/const";

import "./Footer.css"



export const  Footer = () => {

    return (
 <div className="basis-section">
    <div className="skills-section">
    <h1 id={PARAMS.Skills}>Skills</h1> 
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
      </ul>
    </div>
    <div className="experience-section">
    <h1 id={PARAMS.Experience}>Experience</h1> 
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
      </ul>
    </div>
    <div className="projects-section">
    <h1 id={PARAMS.Projects}>Projects</h1> 
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
      </ul>
    </div>
    <div className="sport-section">
          <h1 id={PARAMS.Hobby}>Hobby</h1> 
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