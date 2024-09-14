import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      // Recalculate totalQuantity and totalPrice
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find(
        (product) => product._id === action.payload
      );
      if (item) {
        item.quantity += 1;
        // Recalculate totalQuantity and totalPrice
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find(
        (product) => product._id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        // Recalculate totalQuantity and totalPrice
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      // Recalculate totalQuantity and totalPrice after removal
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
