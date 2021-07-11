import { useEffect, useState } from "react";

export interface Props {
    name: string
    initialState?: boolean,
    stateOverride?: boolean
}

export function Checkbox({ name, initialState = false, stateOverride }: Props) {
    const [isChecked, setIsChecked] = useState(initialState);
    useEffect(() => {stateOverride !== undefined && setIsChecked(stateOverride);}, [stateOverride]);

    return (
        <input
            className="checkbox"
            name={name}
            type="checkbox"
            checked={isChecked}
            onChange={_ => setIsChecked(!isChecked)} />
    )
}