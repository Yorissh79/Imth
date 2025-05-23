import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getItemThunk = createAsyncThunk("/item/get", async (it) => {
    const res = await axios.get("http://localhost:5000/products");
    const data = res.data.filter(item => item.it === it);
    console.log(it)
    return data;
})

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        data: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItemThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload;
            })
    }
})

export default itemSlice.reducer;