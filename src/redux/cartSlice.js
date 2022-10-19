import { createSlice } from "@reduxjs/toolkit";

// initialstate
const initialState = {
  cartItems: [],
  cartcount: 0
}

// reducer
export const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.cartItems.push(action.payload)
      state.cartcount = state.cartItems.length
    },
    removefromcart: (state, action) => {
      const indexOfObject = state.cartItems.findIndex((object) => {
        return object.id === action.payload.id;
      });
      state.cartItems.splice(indexOfObject, 1);
      state.cartcount = state.cartItems.length
    }
  }
})

//action
export const { addTocart, removefromcart } = cartslice.actions;

export default cartslice.reducer