import { createSlice } from "@reduxjs/toolkit";
// ba
export const counterSlice = createSlice({
  name: "mycounter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;