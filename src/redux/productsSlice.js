import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk('shop/fetchProducts',
  () => {
    return fetch(baseURL)
      .then((res) => res.json())
      .then((json) => json);
  })
//initialstate
const initialState = {
  productsList: [],
  loading: false,
  err: {}
}

// reducer
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false
      state.productsList = action.payload
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false
      state.err = action.payload
    }

  }
});

export default productSlice.reducer
