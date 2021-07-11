export interface Props {
    name: string,
    isChecked: boolean,
    onCheck: (checked: boolean) => void
}

export function Checkbox({ name, isChecked, onCheck}: Props) {

    return (
        <input
            className="checkbox"
            name={name}
            type="checkbox"
            checked={isChecked}
            onChange={(event) => onCheck(event.target.checked)} />
    )
}