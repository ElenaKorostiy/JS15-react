import { Link } from "react-router-dom";

export const AddBlog = () => {
    return (
    <div>
      <h1>Add Blog</h1>
       <Link to="/">
           <button>Go back</button>
       </Link>
    </div>
    )
};