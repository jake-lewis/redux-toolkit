import { createSlice, createEntityAdapter, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
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
        // Prevent specifying ID on add, ID of new logger is always incremented from the previous highest ID
        addLogger: (state, {payload}: PayloadAction<Omit<Logger, "id">>) => {
            const id = (state.ids as number[]).reduce((acc, id) => Math.max(acc,id), 0) + 1;
            loggerAdapter.addOne(state, {id, ...payload})
        },
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