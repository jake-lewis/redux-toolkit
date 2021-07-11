import { useAppSelector } from "../../../app/hooks";
import { useAppDispatch } from "../../../app/store";
import { ProductRow } from "./ProductRow";
import { selectActiveProductById, updateProduct } from "../productSlice";

export interface Props {
    productId: number
}

export function ReduxProductRow({productId}: Props) {
    
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => selectActiveProductById(state, productId));
    const onCheck = (checked: boolean) => dispatch(updateProduct({id: productId, changes: { checked }}))

    return (product ? <ProductRow product={product!} onCheck={onCheck} /> : null)
}