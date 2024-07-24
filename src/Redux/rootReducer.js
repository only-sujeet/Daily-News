import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./apiReducer";

const rootReducer = combineReducers({
    api:apiReducer
})

export default rootReducer;