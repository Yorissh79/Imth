import React from 'react'
import style from './Fsection.module.scss'

const Fsection = () => {
    return (
       <div className={style.main}>
            <div className={style.text}>
                <p className={style.f}>Always Fresh Always Fresh Always Fresh Always fresh</p>
                <p className={style.s}>we deliver organic foods</p>
                <button>View Details</button>
            </div>
           <div className={style.overlay}>
               
           </div>
       </div>
    )
}

export default Fsection