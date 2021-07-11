import { useState } from "react";
import './ProductAddDialog.scss';

export interface Props {
    onAdd: (name: string, description: string) => void
}

export function ProductAddDialog({onAdd}: Props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="productAddDialog">
            <h2>Add Product</h2>
            <div>
                <label>Name</label>
                <input 
                    name="productName" 
                    type="text" 
                    placeholder="Product Name" 
                    onChange={event => setName(event.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input 
                    name="productDesc" 
                    type="text" 
                    placeholder="Product Description"
                    onChange={event => setDescription(event.target.value)} />
            </div>
            <button onClick={_ => onAdd(name, description)}>Add</button>
        </div>
    )
}