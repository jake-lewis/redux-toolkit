import { combineReducers } from "@reduxjs/toolkit";
import textLoggerReducer from '../features/textLogger/textLoggerSlice';
import productReducer from '../features/products/productSlice';

export const rootReducer = combineReducers({
    textLogger: textLoggerReducer,
    products: productReducer
});