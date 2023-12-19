import { Link } from "react-router-dom";

export const Blog = () => {
    return (
    <div>
      <h1>Blog Page</h1>
       <Link to="/">
           <button>Go back</button>
       </Link>
    </div>
    )
};