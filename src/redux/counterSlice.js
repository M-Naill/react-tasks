import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0
}

// reducer here
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.counter = state.counter + action.payload
    },
    decrementCount: (state, action) => {
      state.counter = state.counter - action.payload
    }
  }

})


// action here
export const { incrementCount, decrementCount } = counterSlice.actions;
