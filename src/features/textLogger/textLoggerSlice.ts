import { createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export interface Logger { 
    id: number,
    text: string, 
    port: number
}

const loggerAdapter = createEntityAdapter<Logger>();
const initialState = loggerAdapter.getInitialState();

export const textLoggerSlice = createSlice({
    name: 'textLogger',
    initialState,
    reducers: {
        addLogger: loggerAdapter.addOne,
        editLogger: loggerAdapter.updateOne,
        removeLogger: loggerAdapter.removeOne
    }
});

export const {
    selectById: selectLoggerById,
    selectIds: selectLoggerIds,
    selectEntities: selectLoggerEntities,
    selectAll: selectAllLoggers,
    selectTotal: selectTotalLoggers,
} = loggerAdapter.getSelectors<RootState>((state) => state.textLogger);

export const { addLogger, editLogger, removeLogger } = textLoggerSlice.actions;
export default textLoggerSlice.reducer;