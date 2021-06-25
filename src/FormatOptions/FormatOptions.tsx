import { FormatButton } from "./FormatButton";
import { FormatInput } from "./FormatInput";
import './FormatOptions.css';

interface Props {
    onFormat: (formatType: string) => void;
}

export const FormatOptions = ({ onFormat }: Props) => {

    return (
        <div className="formatOptionsWrapper">
            <FormatButton
                onFormat={onFormat}
                formatType='bold'
                btnText='Bold'
            />
            <FormatButton
                onFormat={onFormat}
                formatType='italic'
                btnText='Italic'
            />
            <FormatButton
                onFormat={onFormat}
                formatType='underline'
                btnText='Underline'
            />
            <FormatInput
                onFormat={onFormat}
                formatType='fontSize'
                placeholderText='Font Size (px)'
                inputType="number"
            />
            <FormatInput
                onFormat={onFormat}
                formatType='forecolor'
                placeholderText='Color Hex Code'
            />
            <FormatButton
                onFormat={onFormat}
                formatType='insertunorderedlist'
                btnText='List'
            />
        </div>
    )
}