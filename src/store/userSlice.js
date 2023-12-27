import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    usersList: { loading: false, data: null, error: null },
    user: { loading: false, data: null, error: null },
};

export const fetchUsers = createAsyncThunk("fetch-users", async () => {
  try {
    const resp = await fetch('https://dummyjson.com/users');
    if (!resp.ok) {
      throw "Error";
    }
    const data = await resp.json();
    return data.users;
  } catch (error) {
    throw error;
  }
});

    export const fetchUser = createAsyncThunk(
  "fetch-single-user",
  async (id) => {
    const resp = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await resp.json();

    if (!resp.ok) {
      throw "Error";
    }

    return data;
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.usersList.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersList.loading = false;
        state.usersList.data = action.payload;
        state.usersList.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.usersList.loading = false;
        state.usersList.data = [];
        state.usersList.error = action.payload;
      })
      .addCase(fetchUser.pending, (state) => {
        state.user.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user.loading = false;
        state.user.data = action.payload;
        state.user.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.user.loading = false;
        state.user.data = null;
        state.user.error = action.payload;
      });
  },
});

export const { selectUser } = usersSlice.actions;
export const selectUsers = (state) => state.users.usersList.data;
export const selectSelectedUser = (state) => state.users.user;

export const usersReducer = usersSlice.reducer;
export const useUsersSelector = () =>
    useSelector((state) => state.users.usersList);
export const useUserSelector = () =>
  useSelector((state) => state.users.user);



