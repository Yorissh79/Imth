import React from 'react'
import style from './Card.module.scss'
import {useDispatch} from "react-redux";
import {deleteProductThunk} from "../../../../redux/reducers/productSlice.js";
import {deleteBasketThunk, postBasketThunk} from "../../../../redux/reducers/basketSlice.js";
import {deleteWishlistThunk, postWishlistThunk} from "../../../../redux/reducers/wishlistSlice.js";

const Card = ({item, who}) => {

    const dispatch = useDispatch()

    const deleteAdmin = () => {
        dispatch(deleteProductThunk(item._id))
    }

    const deleteBasket = () => {
        dispatch(deleteBasketThunk(item._id))
    }

    const deleteWishlist = () => {
        dispatch(deleteWishlistThunk(item._id))
    }

    const addBasket = (count) => {
        const data = {
            it: item.it,
            count: count,
            name: item.name,
            description: item.description,
            image: item.image,
            price: item.price,
        }
        dispatch(postBasketThunk(data))
    }

    const addWishlist = () => {
        const data = {
            it: item.it,
            name: item.name,
            description: item.description,
            image: item.image,
            price: item.price,
        }
        dispatch(postWishlistThunk(data))
    }

    return (
        <div className={style.main}>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            {who === "basket" ? <p>{item.count}</p> : null}
            {who === "basket" ? <div>
                <button onClick={() => {deleteBasket()}}>Delete</button>
                <button onClick={() => {addBasket("1")}}>Add</button>
                {item.count > 1 ? <button onClick={() => {addBasket("-1")}}>Dec</button> : null}
            </div> : null}
            {who === "wishlist" ? <button onClick={() => {deleteWishlist()}}>Delete</button> : null}
            {who === "admin" ? <button onClick={() => {deleteAdmin()}}>Delete</button> : null}
            {who === "home" ? <div>
                <button onClick={() => {addBasket("1")}}>Add to basket</button>
                <button onClick={() => {addWishlist()}}>Add to wishlist</button>
            </div> : null}
            {/*{who === "home" ? <a href={"/item"}>Detail page</a> : null}*/}
        </div>
    )
}

export default Card