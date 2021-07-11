import { createEntityAdapter, createSelector, createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Product {
    id: number,
    productName: string,
    createdOn: Date,
    updatedOn: Date,
    tombstoned: boolean
}

const productAdapter = createEntityAdapter<Product>();
const initialState = productAdapter.getInitialState();

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: productAdapter.addOne,
        updateProduct: productAdapter.updateOne,
        removeProduct: (state, {payload}: PayloadAction<{id: number}>) => {
            if ((state.ids as number[]).includes(payload.id))
                productAdapter.updateOne(state, {id: payload.id, changes: {tombstoned: true}});
        }
    }
});

export const selectProduct: Selector<RootState, ReturnType<typeof productSlice.reducer>> = state => state.products;

export const {
    selectById: selectProductById
} = productAdapter.getSelectors<RootState>(selectProduct);

export const selectActiveProductById = 
    createSelector(selectProductById, product => product?.tombstoned ? undefined : product);

export default productSlice.reducer;