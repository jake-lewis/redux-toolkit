import { createSlice, createEntityAdapter, PayloadAction, Selector, ParametricSelector, createSelector} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
export interface Logger { 
    id: number,
    text: string, 
    port: number
}

const loggerAdapter = createEntityAdapter<Logger>();
const initialState = loggerAdapter.getInitialState({
    loadingPorts: [] as number[]
});

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

export const selectTextLogger: Selector<RootState, ReturnType<typeof textLoggerSlice.reducer>> = (state) => state.textLogger;

export const selectLoadingPorts: Selector<RootState, number[]> = (state) => selectTextLogger(state).loadingPorts;

export const {
    selectById: selectLoggerById,
    selectIds: selectLoggerIds,
    selectEntities: selectLoggerEntities,
    selectAll: selectAllLoggers,
    selectTotal: selectTotalLoggers,
} = loggerAdapter.getSelectors<RootState>(selectTextLogger);

export const selectPortIsLoading = 
createSelector(
    [selectLoggerById, selectLoadingPorts],
    (logger, loadingports) => logger?.port ? loadingports.includes(logger.port) : false)

export const { addLogger, editLogger, removeLogger } = textLoggerSlice.actions;
export default textLoggerSlice.reducer;