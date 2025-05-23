import React from 'react'
import style from './Footer.module.scss'
import {AiFillHeart} from "react-icons/ai";

const Footer = () => {
    return (
       <div className={style.main}>
            <p>Copyright ©2025 All rights reserved | This template is made with <AiFillHeart/> by <a href="/">Colorlib</a></p>
       </div>
    )
}

export default Footer