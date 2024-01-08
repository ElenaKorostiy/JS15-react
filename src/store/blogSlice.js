import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";
import { blogData } from '../utils/bd.js';



const initialState = blogData;

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addComents: (state, action) => {
      const { id, coments } = action.payload;
       state.forEach((blogelements) => {
         if (blogelements.id === id) {
        blogelements.coments = [...blogelements.coments, coments];
        }
       })   
           
    },
    addLike: (state, action) => {
      const { id } = action.payload;
      return state.map((blog) => {
       return blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      });
    },
    addThumbsUp: (state, action) => {
      const { id } = action.payload;
      return state.map((blog) => {
       return blog.id === id ? { ...blog, thumbsUp: blog.thumbsUp + 1 } : blog
      });
    },
  },
});


export const { addPost, addLike, addThumbsUp, addComents } = blogSlice.actions;
export const selectPosts = (state) => state.blog.posts;
export const useblogDataSelector = () => useSelector((state) => state.blog);

export const blogReducer =  blogSlice.reducer;