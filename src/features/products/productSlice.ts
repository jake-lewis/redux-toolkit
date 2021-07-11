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

export const selectProducts: Selector<RootState, ReturnType<typeof productSlice.reducer>> = state => state.products;

export const {
    selectById: selectProductById,
    selectIds: selectProductIds,
    selectEntities: selectProductEntities,
    selectAll: selectAllProducts,
    selectTotal: selectTotalProducts
} = productAdapter.getSelectors<RootState>(selectProducts);

export const selectAllActiveProducts = 
    createSelector(selectAllProducts, products => products.filter(product => !product.tombstoned));
export const selectAllActiveProductIds =
    createSelector(selectAllActiveProducts, products => products.map(product => product.id))
export const selectActiveProductById = 
    createSelector(selectProductById, product => product?.tombstoned ? undefined : product);

export default productSlice.reducer;