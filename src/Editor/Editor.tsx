import { useEffect, useRef, useState } from 'react';
import { FormatOptions } from '../FormatOptions/FormatOptions';
import './Editor.css';

interface EditorProps {
    setHtml: (html: string | undefined) => void;
}

export const RichTextEditor = ({ setHtml }: EditorProps) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [selectedText, setSelection] = useState<Range | undefined>(undefined);

    const saveSelection = () => {
        
        if (window.getSelection) {
            const sel = window.getSelection();
            if (sel && sel.getRangeAt && sel.rangeCount) {
                console.log('selectedText', sel.getRangeAt(0))
                return setSelection(sel.getRangeAt(0));
            }
        }
        //  else if (document.selection && document.selection.createRange) {
        //     return document.selection.createRange();
        // }
        return setSelection(undefined);
    }

    console.log(selectedText)

    const restoreSelection = () => {
        if (selectedText) {
            if (window.getSelection) {
                const sel = window.getSelection();
                if (sel) {
                    sel.removeAllRanges();
                    sel.addRange(selectedText);
                }
            }
            // else if (document.selection && range.select) {
            //     range.select();
            // }
        }
    }

    const formatDoc = (formatType: any, formatValue?: any) => {
        restoreSelection()
        if (editorRef && editorRef.current && !selectedText) {
            editorRef.current.focus();
            let p = editorRef.current;
            let s = window.getSelection()
            let r = document.createRange()
            let e = p.childElementCount > 0 ? p.lastChild : p;
            if (e) {
                r.setStart(e, 1);
                r.setEnd(e, 1);
            }
            if (s) {
                s.removeAllRanges()
                s.addRange(r)
            }
        }
        document.execCommand(formatType, false, formatValue);
        setHtml(editorRef.current?.innerHTML);
    }

    return (
        <div className="editorWrapper">
            <FormatOptions onFormat={formatDoc} />
            <div ref={editorRef} className="textEditor" id="editor" contentEditable="true"
                onKeyUp={saveSelection}>
            </div>
        </div>
    )
}