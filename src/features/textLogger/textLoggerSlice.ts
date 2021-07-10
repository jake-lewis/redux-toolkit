import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Logger { 
    text: string, 
    port: number
}

export interface LoggerState {
    loggers: Logger[]
}

const initialState: LoggerState = { loggers: [] };

export const textLoggerSlice = createSlice({
    name: 'textLogger',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Logger>) => {
            if (!state.loggers.find(logger => logger.port === action.payload.port))
                state.loggers.push(action.payload);
        },
        edit: (state, action: PayloadAction<Logger>) => {
            state.loggers.map(logger => {
                if (logger.port === action.payload.port) {
                    logger.text = action.payload.text;
                }
                return logger;
            });
        },
        remove: (state, action: PayloadAction<number>) => {
            state.loggers = state.loggers.filter(logger => logger.port !== action.payload);
        }
    }
});

export const { add, edit, remove } = textLoggerSlice.actions;
export default textLoggerSlice.reducer;