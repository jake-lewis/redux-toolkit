import { Checkbox } from "../../common/components/Checkbox";
import { Product } from "./productSlice";

export interface Props {
    product: Product
}

export function ProductRow({product}: Props) {
    return (
        <div className='product'>
            <Checkbox name='productSelected'/>
            <p>
                <span>{product.id}</span>
                <span>{product.productName}</span>
                <span>{product.createdOn}</span>
                <span>{product.updatedOn}</span>
            </p>
        </div>
    );
}