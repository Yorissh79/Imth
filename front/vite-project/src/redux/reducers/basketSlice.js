import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk("/basket/get", async () => {
    const res = await axios.get("http://localhost:5000/basket");
    return res.data;
})

export const postBasketThunk = createAsyncThunk("/basket/post", async (data) => {
    await axios.post(`http://localhost:5000/basket`, data);
    const res = await axios.get("http://localhost:5000/basket");
    return res.data;
})

export const deleteBasketThunk = createAsyncThunk("/basket/delete", async (id) => {
    const res = await axios.delete(`http://localhost:5000/basket/${id}`);
    return id;
})

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        data: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder

            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload;
            })

            .addCase(postBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload;
            })

            .addCase(deleteBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = state.data.filter(basket => basket._id !== action.payload);
            })
    }
})

export default basketSlice.reducer;