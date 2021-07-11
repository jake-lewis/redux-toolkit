import { Checkbox } from "../../../common/components/Checkbox";
import { Product } from "../productSlice";
import './ProductRow.scss';

export interface Props {
    product: Product,
    onCheck: (checked: boolean) => void
}

export function ProductRow({product, onCheck}: Props) {

    const dateCreated = new Date(product.createdOn).toLocaleDateString();
    const dateUpdated = new Date(product.updatedOn).toLocaleDateString();

    return (
        <div className='product'>
            <Checkbox name='productSelected' isChecked={product.checked} onCheck={onCheck}/>
            <div>
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>{dateCreated}</p>
                <p>{dateUpdated}</p>
            </div>
        </div>
    );
}