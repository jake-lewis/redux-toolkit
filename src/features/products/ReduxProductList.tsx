import { useAppSelector } from "../../app/hooks";
import { selectAllActiveProductIds } from "./productSlice";
import { ReduxProductRow } from "./ReduxProductRow";

export function ReduxProductList() {
    
    const products = useAppSelector(state => selectAllActiveProductIds(state));
    
    return (
        <div>
            {products.map(id => <ReduxProductRow key={id} productId={id} />)}
        </div>
    )
}