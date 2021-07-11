import { useAppSelector } from "../../app/hooks";
import { ProductRow } from "./ProductRow";
import { selectActiveProductById } from "./productSlice";

export interface Props {
    productId: number,
    checkboxStateOverride: boolean
}

export function ReduxProductRow({productId, checkboxStateOverride}: Props) {
    
    const product = useAppSelector(state => selectActiveProductById(state, productId));

    return (product ? <ProductRow product={product!} checkboxStateOverride={checkboxStateOverride}/> : null)
}