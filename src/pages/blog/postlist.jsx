import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPosts } from '../../store/postSlice';
// import { ReactionButtons } from './reactionbuttons';
// import { Link } from 'react-router-dom';

import "./list-box.css";

export const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

 
    
    return (
        <div>
            <p>Posts List</p>
            {/* <Link to={`/users`}>
                  <button>List Users</button>
              </Link> */}
            <ul className="list-box">
                {posts.map((post) => (
                    <li key={post.id} className="box">
                        <p >{post.title}</p>
                        <p>{post.body}</p>
                        {/* <div>{reactionButtons}</div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};