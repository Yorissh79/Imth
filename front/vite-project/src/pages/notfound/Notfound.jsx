import React from 'react'
import style from './Notfound.module.scss'
import {Link} from "react-router";

const Notfound = () => {
    return (
       <div className={style.main}>
           <h1>Not found</h1>
           <Link to="/">Go back</Link>
       </div>
    )
}

export default Notfound