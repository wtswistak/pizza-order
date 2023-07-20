import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feautures/user/userSlice";
import cartReducer from "./feautures/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
