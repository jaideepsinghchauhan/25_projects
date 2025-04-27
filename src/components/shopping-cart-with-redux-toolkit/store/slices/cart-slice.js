import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log("action", action, "state", state);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      console.log("action", action, "state", state);
      // remove from state
      return state.filter((prod) => prod.id !== action.payload);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
