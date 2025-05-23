import React from 'react'
import style from './Header.module.scss'
import {Link} from "react-router";
import {BiCart} from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
       <div className={style.main}>
           <div className={style.logo}>
               <a href={"/"}>Vegefoods</a>
           </div>
            <div className={style.right}>
                <Link to="/">Home</Link>
                <Link to="/basket">Basket</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/admin">Admin</Link>
            </div>
           <div className={style.icon}>
               <Link to="/basket"><BiCart/></Link>
           </div>
           <div className={style.burger}>
               <RxHamburgerMenu/>
           </div>
       </div>
    )
}

export default Header