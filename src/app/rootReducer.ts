import { combineReducers } from "@reduxjs/toolkit";
import textLoggerReducer from '../features/textLogger/textLoggerSlice';

export const rootReducer = combineReducers({
    textLogger: textLoggerReducer
});