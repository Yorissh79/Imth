import React, {useEffect} from 'react'
import style from './Home.module.scss'
import Fsection from "./components/fsection/Fsection.jsx";
import Ssection from "./components/ssection/Ssection.jsx";
import {Helmet} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../redux/reducers/productSlice.js";
import Backcard from "../../components/backcard/Backcard.jsx";
import Tsection from "./components/tsection/Tsection.jsx";
import Fosection from "./components/fosection/Fosection.jsx";

const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.product.data);

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    return (
       <div className={style.main}>
           <Helmet>
               <title>"Home"</title>
               <meta name="title" content="Home" />
           </Helmet>
           <Fsection/>
           <Ssection/>
           <Backcard data={data} who={"home"} />
           <Tsection/>
           <Fosection/>
       </div>
    )
}

export default Home