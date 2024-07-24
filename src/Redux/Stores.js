import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const Stores = configureStore({
    reducer : rootReducer
})