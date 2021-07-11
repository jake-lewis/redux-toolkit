import { Checkbox } from "../../common/components/Checkbox";
import { Product } from "./productSlice";
import './ProductRow.scss';

export interface Props {
    product: Product,
    checkboxStateOverride: boolean
}

export function ProductRow({product, checkboxStateOverride}: Props) {

    const dateCreated = new Date(product.createdOn).toLocaleDateString();
    const dateUpdated = new Date(product.updatedOn).toLocaleDateString();

    return (
        <div className='product'>
            <Checkbox name='productSelected' stateOverride={checkboxStateOverride}/>
            <p>
                <span>{product.id}</span>
                <span>{product.name}</span>
                <span>{dateCreated}</span>
                <span>{dateUpdated}</span>
            </p>
        </div>
    );
}