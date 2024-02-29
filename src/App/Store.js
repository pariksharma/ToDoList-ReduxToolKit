import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/Todo/TodoSlice';
import changeColorReducer from '../features/ChangeColorSlice/ChangeColorSlice'

const combine = combineReducers({
    todo: todoReducer,
    colorReducer: changeColorReducer
})

export const store = configureStore({
    reducer: combine,    
})