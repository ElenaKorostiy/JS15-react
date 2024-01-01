import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { PostList } from "./postlist";

export const Blog = () => {
    return (
    <div>
    <h1>Blog Page</h1>            
       <Link to="/">
           <button>Go back</button>
        </Link>
        <Route path="/blog" exact component={PostList} />          
    </div>
    )
};