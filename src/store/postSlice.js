import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  postsList: { loading: false, data: null, error: null },
  
};

export const fetchPosts = createAsyncThunk("fetch-posts", async () => {
  const resp = await fetch(`https://dummyjson.com/posts`);
  const data = await resp.json();

  if (!resp.ok) {
    throw "Error";
  }

  return data.posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.postsList.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postsList.loading = false;
        state.postsList.data = action.payload;
        state.postsList.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.postsList.loading = false;
        state.postsList.data = null;
        state.postsList.error = action.payload;
      })
    
  },
});


export const postsReducer = postsSlice.reducer;
export const selectPosts = state => state.posts.postsList?.data || [];
export const usePostsSelector = () =>
  useSelector((state) => state.posts.postsList);

