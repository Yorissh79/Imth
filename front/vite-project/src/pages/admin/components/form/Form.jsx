import React from 'react'
import style from './Form.module.scss'
import * as Yup from "yup";
import {useFormik} from "formik";
import {postProductThunk} from "../../../../redux/reducers/productSlice.js";
import {useDispatch} from "react-redux";

const Form = () => {

    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string().required().min(3, "Name must be at least 3 characters"),
        image: Yup.string().required().min(3, "Image must be at least 3 characters"),
        description: Yup.string().required().min(3, "Description must be at least 3 characters"),
        price: Yup.string().required().min(1, "Price must be at least 1 characters"),
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            description: "",
            price: ""
        },
        validationSchema,
        onSubmit: (values) => {
            const data = {
                ...values,
                it: String("item" + Math.random() * 123456)
            }
            dispatch(postProductThunk(data))
        }
    })

    return (
       <div className={style.main}>
           <form onSubmit={formik.handleSubmit}>
               <div className={style.di}>
                   <label htmlFor="price">Price</label>
                   <input
                       id="price"
                       name="price"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.price}
                   />
                   {formik.touched.price && formik.errors.price ? <span>{formik.errors.price}</span> : null}
               </div>

               <div className={style.di}>
                   <label htmlFor="name">Name</label>
                   <input
                       id="name"
                       name="name"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name}
                   />
                   {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}
               </div>

               <div className={style.di}>
                   <label htmlFor="image">Image</label>
                   <input
                       id="image"
                       name="image"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.image}
                   />
                   {formik.touched.image && formik.errors.image ? <span>{formik.errors.image}</span> : null}
               </div>

               <div className={style.di}>
                   <label htmlFor="description">Description</label>
                   <input
                       id="description"
                       name="description"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.description}
                   />
                   {formik.touched.description && formik.errors.description ? <span>{formik.errors.description}</span> : null}
               </div>

               <button type="submit">Submit</button>
           </form>
       </div>
    )
}

export default Form