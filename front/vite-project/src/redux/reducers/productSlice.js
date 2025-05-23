import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("/products/get", async () => {
    const res = await axios.get("http://localhost:5000/products");
    return res.data;
})

export const postProductThunk = createAsyncThunk("/products/post", async (data) => {
    await axios.post(`http://localhost:5000/products`, data);
    const res = await axios.get("http://localhost:5000/products");
    return res.data;
})

export const deleteProductThunk = createAsyncThunk("/products/delete", async (id) => {
    const res = await axios.delete(`http://localhost:5000/products/${id}`);
    return id;
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder

            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload;
            })

            .addCase(postProductThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload;
            })

            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = state.data.filter(product => product._id !== action.payload);
            })
    }
})

export default productSlice.reducer;