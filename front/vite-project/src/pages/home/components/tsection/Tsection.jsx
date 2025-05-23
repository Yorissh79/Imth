import React from 'react'
import style from './Tsection.module.scss'

const Tsection = () => {
    return (
       <div className={style.main}>
            <div className={style.top}>
                <p className={style.f}>Testimony</p>
                <p className={style.s}>Our satisfied customer says</p>
                <p className={style.t}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live </p>
            </div>
           <div className={style.cards}>
               <div className={style.card}>
                   <img src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg.webp"/>
                   <p className={style.fo}>Far far away, behind the word mountains,  the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                   <p className={style.fi}>Garreth Smith</p>
                   <p className={style.si}>Web developer</p>
               </div>
               <div className={style.card}>
                   <img src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg.webp"/>
                   <p className={style.fo}>Far far away, behind the word mountains,  the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                   <p className={style.fi}>Garreth Smith</p>
                   <p className={style.si}>Web developer</p>
               </div>
               <div className={style.card}>
                   <img src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg.webp"/>
                   <p className={style.fo}>Far far away, behind the word mountains,  the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                   <p className={style.fi}>Garreth Smith</p>
                   <p className={style.si}>Web developer</p>
               </div>
           </div>
       </div>
    )
}

export default Tsection