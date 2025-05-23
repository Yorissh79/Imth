import React, {useEffect} from 'react'
import style from './Detail.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getItemThunk} from "../../redux/reducers/itemSlice.js";

const Detail = () => {

    const dispatch = useDispatch();
    const item =  useSelector((state) => state.item.data)
    console.log(item)

    useEffect(() => {
        dispatch(getItemThunk())
    }, [])

    return (
       <div className={style.main}>
           <div className={style.overlay}>
               <p>{item.name}</p>
               <p>{item.description}</p>
               <p>{item.price}</p>
           </div>
       </div>
    )
}

export default Detail