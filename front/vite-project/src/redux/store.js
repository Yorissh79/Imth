import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice.js";
import wishlistSlice from "./reducers/wishlistSlice.js";
import basketSlice from "./reducers/basketSlice.js";
import itemSlice from "./reducers/itemSlice.js";

export const store = configureStore({
    reducer: {
        product: productSlice,
        wishlist: wishlistSlice,
        basket: basketSlice,
        item: itemSlice,
    }
})