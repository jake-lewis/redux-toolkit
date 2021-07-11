import { useState } from "react";

export interface Props {
    name: string
    initialState?: boolean
}

export function Checkbox({ name, initialState = false }: Props) {
    const [isChecked, setIsChecked] = useState(initialState);

    return (
        <input
            name={name}
            type='checkbox'
            checked={isChecked}
            onChange={_ => setIsChecked(!isChecked)} />
    )
}