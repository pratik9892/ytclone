import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : true,
}


const handleSlice = createSlice({
    name:"handleClick",
    initialState,
    reducers:{
        handleClick : (state,action) => {
            state.status = action.payload
        }
    }
})

export const {handleClick} = handleSlice.actions
export default handleSlice.reducer
