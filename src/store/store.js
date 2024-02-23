import { configureStore } from "@reduxjs/toolkit";
import handleSlice from "../store/handleSlice";

export const store = configureStore({
    reducer:{
        handleClick : handleSlice
    }
})