import React from 'react'
import style from './Fosection.module.scss'

const Fosection = () => {
    return (
       <div className={style.main}>
            <div className={style.left}>
                <p className={style.f}>Subcribe to our Newsletter</p>
                <p className={style.s}>Get e-mail updates about our latest shops and special offers</p>
            </div>
           <div className={style.right}>
               <input placeholder="Email address" name="email" type="email" />
               <button>Subscribe</button>
           </div>
       </div>
    )
}

export default Fosection