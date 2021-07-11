import { Checkbox } from "../../common/components/Checkbox";
import { Product } from "./productSlice";
import './ProductRow.scss';

export interface Props {
    product: Product
}

export function ProductRow({product}: Props) {

    const dateCreated = new Date(product.createdOn).toLocaleDateString();
    const dateUpdated = new Date(product.updatedOn).toLocaleDateString();

    return (
        <div className='product'>
            <Checkbox name='productSelected'/>
            <p>
                <span>{product.id}</span>
                <span>{product.name}</span>
                <span>{dateCreated}</span>
                <span>{dateUpdated}</span>
            </p>
        </div>
    );
}