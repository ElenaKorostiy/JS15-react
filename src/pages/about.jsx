import { Link } from "react-router-dom";

export const About = () => {
    return (
    <div>
      <h1>About Page</h1>
       <Link to="/">
           <button>Go back</button>
       </Link>
    </div>
    )
};