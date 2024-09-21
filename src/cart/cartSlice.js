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
        // Check stock before increasing quantity
        if (existingItem.quantity < action.payload.stock_quantity) {
          existingItem.quantity += 1;
        } else {
          console.log("Cannot add more of this item. Stock limit reached.");
        }
      } else {
        // Add only if stock is available
        if (action.payload.stock_quantity > 0) {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
      }

      // Recalculate totals
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
      if (item && item.quantity < item.stock_quantity) {
        item.quantity += 1;
        // Recalculate totals
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      } else {
        console.log("Cannot increase quantity. Stock limit reached.");
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find(
        (product) => product._id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        // Recalculate totals
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
      // Recalculate totals after removal
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
