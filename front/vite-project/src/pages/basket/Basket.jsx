import React, {useEffect} from 'react'
import style from './Basket.module.scss'
import {Helmet} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../redux/reducers/productSlice.js";
import {getBasketThunk} from "../../redux/reducers/basketSlice.js";
import Backcard from "../../components/backcard/Backcard.jsx";

const Basket = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.basket.data);

    useEffect(() => {
        dispatch(getBasketThunk())
    }, [])

    return (
       <div className={style.main}>
           <Helmet title="Home" meta="description" />
           <Backcard data={data} who={"basket"} />
       </div>
    )
}

export default Basket