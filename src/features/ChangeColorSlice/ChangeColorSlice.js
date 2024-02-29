import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "#5c6e94;"
}

export const ChangeColorSlice = createSlice({
    name: "change",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action?.payload;
        }
    }
})

export const {changeColor} = ChangeColorSlice.actions

export default ChangeColorSlice.reducer