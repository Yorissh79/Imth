import express from "express";
import {deleteProduct, getProduct, postProduct} from "../controller/productController.js";
import {deleteWishlist, getWishlist, postWishlist} from "../controller/wishlistController.js";
import {deleteBasket, getBasket, postBasket} from "../controller/basketController.js";

const router = express.Router();

router
    .get("/products", getProduct)
    .post("/products", postProduct)
    .delete("/products/:id", deleteProduct)

    .get("/basket", getBasket)
    .post("/basket", postBasket)
    .delete("/basket/:id", deleteBasket)

    .get("/wishlist", getWishlist)
    .post("/wishlist", postWishlist)
    .delete("/wishlist/:id", deleteWishlist)

export default router;