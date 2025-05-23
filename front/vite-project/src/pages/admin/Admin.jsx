import React, {useEffect} from 'react'
import style from './Admin.module.scss'
import {Helmet} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk, postProductThunk} from "../../redux/reducers/productSlice.js";
import Backcard from "../../components/backcard/Backcard.jsx";
import * as Yup from "yup";
import {useFormik} from "formik";
import Form from "./components/form/Form.jsx";

const Admin = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.product.data);



    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    return (
       <div className={style.main}>
           <Helmet title="Home" meta="description" />
            <Form/>
           <Backcard data={data} who={"admin"} />
       </div>
    )
}

export default Admin