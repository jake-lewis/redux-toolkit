import { Checkbox } from "../../common/components/Checkbox";
import { Product } from "./productSlice";
import './ProductRow.scss';

export interface Props {
    product: Product
}

export function ProductRow({product}: Props) {
    return (
        <div className='product'>
            <Checkbox name='productSelected'/>
            <p>
                <span>{product.id}</span>
                <span>{product.name}</span>
                <span>{product.createdOn.toLocaleDateString()}</span>
                <span>{product.updatedOn.toLocaleDateString()}</span>
            </p>
        </div>
    );
}