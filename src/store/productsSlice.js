import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  productsList: { loading: false, data: [], error: null },
};

export const fetchProducts = createAsyncThunk("fetch-products", async () => {
  const resp = await fetch(`https://dummyjson.com/products`);
  const data = await resp.json();

  if (!resp.ok) {
    throw "Error";
  }

  return data.products;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsList.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsList.loading = false;
        state.productsList.data = action.payload;
        state.productsList.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsList.loading = false;
        state.productsList.data = null;
        state.productsList.error = action.payload;
      });
      
  },
});

export const productsReducer = productsSlice.reducer;
export const selectProducts = (state) => state.products.productsList.data;

export const useProductsSelector = () =>
  useSelector((state) => state.products.productsList);