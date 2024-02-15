import { useState } from "react"
import { FaRegCopy } from "react-icons/fa6"
import { TiTick } from "react-icons/ti"

export function Snippet({ size="md", children: text, symbol="$", copy=false }) {
    const [hasCopied, setHasCopied] = useState(false);
    const sizes = {
        sm: "pr-2 pl-2 pt-2 pb-2 text-sm",
        md: "pr-4 pl-4 pt-3 pb-3",
        lg: "pr-7 pl-7 pt-3 pb-3 text-xl"
    };

    if (hasCopied) {
        setTimeout(() => {
            setHasCopied(!hasCopied)
        }, 2000)
    }

    if (typeof text === "object") {
        var lines = text.map(t => 
            <h3>{symbol + "\n"}{t}</h3>
        )
    }

    return (
        <>
            <div className={`border-2 inline-block ${
                size==="sm" ? sizes["sm"] : size==="md" ? sizes["md"] : size==="lg" ? sizes["lg"] : sizes["md"]
                } rounded-lg bg-slate-800 text-white`}>
                <h3 className="font-snippetCode pr-3 inline-block">{lines === undefined ? `${symbol}\n${text}` : lines}</h3>
                <button onClick={() => {
                    const str = () => {
                        let s = "";
                        
                        for (const line of lines) {
                            s += `${line.props.children[1].props.children}\n`;
                        }
                        
                        return s;
                    }
                    navigator.clipboard.writeText(lines === undefined ? text : str());
                    
                    setHasCopied(true)
                }}>
                {
                    !copy
                    ?
                        !hasCopied
                        ? 
                        <FaRegCopy className="inline-block" />
                        :
                        <TiTick className="inline-block" />
                    :
                        ""
                }</button>
            </div>
        </>
    )
}
