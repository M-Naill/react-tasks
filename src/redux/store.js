import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import cartslice from "./cartSlice";

export const store = configureStore({
  reducer: {

    counter: counterSlice.reducer,
    cart: cartslice

  }
})