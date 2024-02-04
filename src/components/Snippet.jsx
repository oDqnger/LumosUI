import { useState } from "react"
import { FaRegCopy } from "react-icons/fa6"
import { TiTick } from "react-icons/ti"
import "../styles/output.css"

export default function Snippet({ children: text, symbol="$", copy="true" }) {
    const [hasCopied, setHasCopied] = useState(false);
    
    if (hasCopied) {
        setTimeout(() => {
            setHasCopied(!hasCopied)
        }, 2000)
    }

    return (
        <>
            <div className="border-2 inline-block pr-4 pl-4 pt-2 pb-2 rounded-lg bg-slate-800 text-white">
                <h3 className="pr-3 inline-block">{symbol}</h3>
                <h3 className="pr-3 inline-block">{text}</h3>
                <button onClick={() => {
                    navigator.clipboard.writeText(text);
                    setHasCopied(true)
                }}>
                {
                    !hasCopied
                    ? 
                    <FaRegCopy className="inline-block" />
                    :
                    <TiTick className="inline-block" />
                }</button>
            </div>
        </>
    )
}
