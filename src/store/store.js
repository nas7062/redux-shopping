import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/productSlice";
import LoginReducer from "../reducer/LoginSlice";
import CartReducer from "../reducer/CartSlice";
const store = configureStore({
    reducer: {
        products: productReducer,
        Login: LoginReducer,
        Cart: CartReducer,
    },

});

export default store;