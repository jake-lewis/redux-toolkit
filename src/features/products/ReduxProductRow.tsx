import { useAppSelector } from "../../app/hooks";
import { ProductRow } from "./ProductRow";
import { selectActiveProductById } from "./productSlice";

export interface Props {
    productId: number
}

export function ReduxProductRow({productId}: Props) {
    
    const product = useAppSelector(state => selectActiveProductById(state, productId));

    return (product ? <ProductRow product={product!}/> : null)
}