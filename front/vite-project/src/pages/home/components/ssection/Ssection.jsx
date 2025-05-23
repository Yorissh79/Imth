import React from 'react'
import style from './Ssection.module.scss'
import { FcShipped } from "react-icons/fc";

const Ssection = () => {
    return (
       <div className={style.main}>
           <div className={style.card}>
               <div className={style.top}>
                   <FcShipped />
               </div>
               <p className={style.f}>Free Shipping</p>
               <p className={style.s}>On order over $100</p>
           </div>
           <div className={style.card}>
               <div className={style.top}>
                   <FcShipped />
               </div>
               <p className={style.f}>Free Shipping</p>
               <p className={style.s}>On order over $100</p>
           </div>
           <div className={style.card}>
               <div className={style.top}>
                   <FcShipped />
               </div>
               <p className={style.f}>Free Shipping</p>
               <p className={style.s}>On order over $100</p>
           </div>
           <div className={style.card}>
               <div className={style.top}>
                   <FcShipped />
               </div>
               <p className={style.f}>Free Shipping</p>
               <p className={style.s}>On order over $100</p>
           </div>
       </div>
    )
}

export default Ssection