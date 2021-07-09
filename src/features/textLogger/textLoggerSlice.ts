import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface loggerState {
    loggers: { text: string, port: number }[]
}

const initialState: loggerState = { loggers: [] };

export const textLoggerSlice = createSlice({
    name: 'textLogger',
    initialState,
    reducers: {
        edit: (state, action: PayloadAction<{ port: number, text: string }>) => {
            state.loggers.map(logger => {
                if (logger.port === action.payload.port) {
                    logger.text = action.payload.text;
                }
                return logger;
            });
        }
    }
});

export const { edit } = textLoggerSlice.actions;
export default textLoggerSlice.reducer;