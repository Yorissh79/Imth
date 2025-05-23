import React from 'react'
import style from './OtherHeader.module.scss'
import {Link} from "react-router";

const OtherHeader = () => {
    return (
       <div className={style.main}>
           <div className={style.right}>
               <Link to="/">Home</Link>
               <Link to="/basket">Basket</Link>
               <Link to="/wishlist">Wishlist</Link>
               <Link to="/admin">Admin</Link>
           </div>
       </div>
    )
}

export default OtherHeader