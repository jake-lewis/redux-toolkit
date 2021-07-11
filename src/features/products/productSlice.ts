import { createEntityAdapter, createSelector, createSlice, PayloadAction, Selector, Update } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Product {
    id: number,
    name: string,
    description: string,
    createdOn: number,
    updatedOn: number,
    tombstoned: boolean,
    checked: boolean
}

const productAdapter = createEntityAdapter<Product>();
const initialState = productAdapter.getInitialState();

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, { payload }: PayloadAction<{ name: string, description: string }>) => {
            if (!!(payload.name.trim()) && !!(payload.description.trim())) {//not null, undefined, or empty
                const id = (state.ids as number[]).reduce((acc, id) => Math.max(acc, id), 0) + 1; //increment id
                const now = Date.now();
                productAdapter.addOne(state, {
                    id: id,
                    name: payload.name,
                    description: payload.description,
                    createdOn: now,
                    updatedOn: now,
                    tombstoned: false,
                    checked: false
                })
            }
        },
        updateProduct: (state, {payload}: PayloadAction<Update<Product>>) => {
            payload.changes.updatedOn = Date.now();
            productAdapter.updateOne(state, payload);
        },
        removeProduct: (state, { payload }: PayloadAction<{ id: number }>) => {
            if ((state.ids as number[]).includes(payload.id))
                productAdapter.updateOne(state, { id: payload.id, changes: { tombstoned: true } });
        },
        checkAll: (state, { payload }: PayloadAction<boolean>) => {
            state.ids.forEach(id => {
                var entity = state.entities[id]!;
                if (!entity.tombstoned)
                    entity.checked = payload;
            });
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

export const { addProduct, updateProduct, removeProduct, checkAll } = productSlice.actions;
export default productSlice.reducer;