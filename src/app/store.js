import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../cart/cartSlice";
import { loadState, saveState } from "../components/Localstorage";
// Import your helper functions

// Load the initial state from localStorage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState, // Use preloadedState for persisting
});

// Subscribe to store changes and save the cart state to localStorage
store.subscribe(() => {
  saveState({
    cart: store.getState().cart, // Persist only the cart state
  });
});

export default store;
