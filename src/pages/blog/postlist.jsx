import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts, selectPosts } from './postSlice';
import { Link } from 'react-router-dom';

// import "./productslist.css";

export const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            <p>Posts List</p>
            <Link to={`/users`}>
                  <button>List Users</button>
              </Link>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="card">
                        <p>Title: {post.title}</p>
                        {/* <p>Description: {post.description}</p>
                        <p>Price: {product.price}</p> */}
                        {/* <img className="box" src={post.images[0]} alt="img" /> */}

                    </li>
                ))}
            </ul>
        </div>
    );
};