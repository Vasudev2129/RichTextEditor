import { useState } from "react"

interface Props {
    onFormat: (formatType: string) => void;
    formatType: string;
    btnText: string;
}

export const FormatButton = ({ onFormat, formatType, btnText }: Props) => {
    const [selected, setSelected] = useState(false);

    return (
        <div
            onClick={() => {
                setSelected(!selected)
                onFormat(formatType)
            }}
            className="formatBtn"
        >
            <span className={selected ? 'selected' : ''}>{btnText}</span>
        </div>
    )
}