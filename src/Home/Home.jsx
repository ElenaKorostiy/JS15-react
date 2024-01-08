import React from 'react';
import { useblogDataSelector } from '../store/blogSlice';
import { Post } from '../components/Post';

import './Home.css';




export const Home = () => {
  const dataBlog = useblogDataSelector();
 

  return <div>
    <h1 className='page'>Blogs Page</h1>
    <p className='too'>Welcome to the Home Page of the React Redux Blog!</p>
    
    <div className="blog-container">
      {dataBlog.map((blog, index) => (
        <div key={index} className="blog-item">
          <img src={blog.image} alt={blog.title} />
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <Post key={blog.id} post={blog} />
        </div>
      ))}
    </div>
  </div>
};


