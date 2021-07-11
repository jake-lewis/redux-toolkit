import { useAppSelector } from "../../../app/hooks";
import { addProduct, checkAll, selectAllActiveProductIds } from "../productSlice";
import { ReduxProductRow } from "./ReduxProductRow";
import Modal from 'react-modal';
import { ProductAddDialog } from "../add/ProductAddDialog";
import { useState } from "react";
import './ReduxProductList.scss';
import { useAppDispatch } from "../../../app/store";

Modal.setAppElement('#root'); //todo check if this is the right place for it / need to worry about multiple modals?

export function ReduxProductList() {
    
    const products = useAppSelector(state => selectAllActiveProductIds(state));
    const [showModal, setShowModal] = useState(false);
    const dispatch = useAppDispatch();

    const onAdd = (name: string, description: string) => {
        dispatch(addProduct({name, description}));
        setShowModal(false);
    }
    
    return (
        <div className="productList">
            <div>
                <h1>Products</h1>
                <button onClick={_ => setShowModal(true)}>Add Product</button>
                <button onClick={_ => dispatch(checkAll(true))}>+</button>
                <button onClick={_ => dispatch(checkAll(false))}>-</button>
            </div>
            <Modal
                isOpen={showModal}
                onRequestClose={_ => setShowModal(false)}>
                <ProductAddDialog onAdd={onAdd}/>
            </Modal>
            {products.map(id => <ReduxProductRow key={id} productId={id} />)}
        </div>
    )
}