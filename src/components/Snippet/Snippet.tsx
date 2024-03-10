import React, { useState, useEffect } from "react"
import { FaRegCopy } from "react-icons/fa6"
import { TiTick } from "react-icons/ti"
import { sizes, textStyles, baseStyles } from "./SnippetStyles";
import SnippetProps from "./snippet.d";

export function Snippet(props: SnippetProps) {
    
    const {
        size="md",
        children: text,
        symbol="$",
        copy=false,
        className,
        ...defaultProps
    } = props;
    
    const [hasCopied, setHasCopied] = useState(false);
    const [lines, setLines] = useState([<h2 className={textStyles}>{symbol + "\n"}{text}</h2>])

    const handleClick = () => {
        const str = () => {
            let s = "";
            
            lines.forEach(line => {
                s += `${line.props.children[1].props.children}\n`;
            })
            
            return s;
        }
        navigator.clipboard.writeText(typeof lines == "string" ? text : str());
        setHasCopied(true)
    }

    const logo = () => {
        return !copy
        ?
            !hasCopied
            ? 
            <FaRegCopy className="inline-block" />
            :
            <TiTick className="inline-block" />
        :
            ""
    }

    useEffect(() => {
        if (typeof text === "object") {
            setLines(text.map(t => 
                <h3 className={textStyles}>{symbol + "\n"}{t}</h3>
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
            className={baseStyles + className + " " +sizes[size]}>
                {lines}
                <button onClick={handleClick}>
                    {logo()}
                </button>
            </div>
        </>
    )
}
