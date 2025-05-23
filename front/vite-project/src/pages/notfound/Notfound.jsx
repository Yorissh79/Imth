import React from 'react'
import style from './Notfound.module.scss'
import {Link} from "react-router";
import {Helmet} from "react-helmet-async";

const Notfound = () => {
    return (
       <div className={style.main}>
           <Helmet>
               <title>Notfound</title>
               <meta name="title" content="Notfound" />
           </Helmet>
           <h1>Not found</h1>
           <Link to="/">Go back</Link>
       </div>
    )
}

export default Notfound