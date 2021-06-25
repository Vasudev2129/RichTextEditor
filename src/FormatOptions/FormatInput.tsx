import { useState } from "react"

interface Props {
    onFormat: (formatType: string, formatValue?: string) => void;
    formatType: string;
    placeholderText: string;
    inputType?: string
}

export const FormatInput = ({ onFormat, formatType, placeholderText, inputType = 'text' }: Props) => {
    const [text, setText] = useState('');
    const fontSizeArr = [10, 13, 16, 18, 24, 32, 48]
    const closest = (checkValue: number) => fontSizeArr.reduce(function (prev, curr) {
        return (Math.abs(curr - checkValue) < Math.abs(prev - checkValue) ? curr : prev);
    });

    const handleInputType = () => {
        if (formatType === 'forecolor') {
            return '#' + text
        } else if (formatType === 'fontSize') {
            // const size = closest(Number(text));
            // const val = fontSizeArr.findIndex((val) => val === size);
            // return (val + 1).toString();
            const val = Number(text) - 16
            const finalVal = val > 0 ? '+' + val : val.toString();
            console.log(finalVal)
            return finalVal
        }
    }

    return (
        <input
            className="formatInput"
            type={inputType}
            placeholder={placeholderText}
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
            onBlur={() => {
                onFormat(formatType, handleInputType());
            }}
        />
    )
}