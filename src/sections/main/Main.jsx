import "./Main.css"
import { Card } from "../../components/card";
import { PARAMS } from "../../storage/const";

import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";

export const Main = () => {

  return (
      <div className="card-container">
          <Card id={PARAMS.Skills} className="card-learning" type="title1" title="Skills" src={photo3} />
          <Card id={PARAMS.Experience}className="card-experience" type="title1" title="Experience" src={photo4}/>
          <Card id={PARAMS.Projects}className="card-photo1" type="title1" title="Projects" src={photo1} />
          <Card id={PARAMS.Hobby}className="card-photo2" type="title2"  title="Hobby" src={photo2}/>
      </div>
      
  );
};