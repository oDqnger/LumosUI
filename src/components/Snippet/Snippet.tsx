import React, { useState, useEffect, forwardRef } from "react"
import { FaRegCopy } from "react-icons/fa6"
import { TiTick } from "react-icons/ti"
import { sizes, textStyles, baseStyles } from "./SnippetStyles";
import SnippetProps from "./snippet.d";

function Snippet(props: SnippetProps, ref) {
    
    const {
        size="md",
        children: text,
        symbol="$",
        copy=false,
        className,
        ...defaultProps
    } = props;
    
    const [hasCopied, setHasCopied] = useState(false);
    const [lines, setLines] = useState<any>(typeof text === "string" ? <h3 className={textStyles}><span className="select-none pointer-events-none">{symbol+"\n"}</span>{text}</h3> : "")

    const handleClick = () => {
        const str = () => {
            let s = "";
            
            lines.forEach(line => {
                s += `${line.props?.children[0].props.children[1].props.children}\n`;
            })
            
            return s;
        }
        navigator.clipboard.writeText(typeof text === "string" ? lines.props?.children[1] :str());
        setHasCopied(true)
    }

    const logo = () => {
        return !copy
        ?
            !hasCopied
            ? 
            <FaRegCopy className="text-right inline-block" />
            :
            <TiTick className="text-right inline-block" />
        :
            ""
    }

    useEffect(() => {
        if (typeof text === "object") {
            setLines(text.map((t,i) => 
                <>
                    <h3 key={i} className={textStyles}><span className="select-none pointer-events-none">{symbol+"\n"}</span>{t}</h3>
                    {i !== text.length - 1 ? <br /> : ""}
                </>
            ))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (hasCopied) {
        setTimeout(() => {
            setHasCopied(!hasCopied)
        }, 2000)
    }
    
    return (
        <>
            <div
            ref={ref}
            className={className + " " + baseStyles + sizes[size]}>
                {lines}
                <button onClick={handleClick}>
                    {logo()}
                </button>
            </div>
        </>
    )
}

export default forwardRef(Snippet);
