import { useState } from "react"
import { RichTextEditor } from "./Editor/Editor"


export const EditorContainer = () => {

    const [html, setHtml] = useState<string | undefined>('')

    return (
        <div>
            <RichTextEditor setHtml={setHtml} />
            <button onClick={() => { console.log(html) }}>Get HTML</button>
        </div>
    )
}