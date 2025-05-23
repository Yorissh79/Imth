import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice.js";
import wishlistSlice from "./reducers/wishlistSlice.js";
import basketSlice from "./reducers/basketSlice.js";

export const store = configureStore({
    reducer: {
        product: productSlice,
        wishlist: wishlistSlice,
        basket: basketSlice,
    }
})