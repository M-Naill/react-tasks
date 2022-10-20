import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import cartslice from "./cartSlice";
import productSlice from "./productsSlice";

export const store = configureStore({
  reducer: {

    counter: counterSlice.reducer,
    cart: cartslice,
    product: productSlice

  }
})