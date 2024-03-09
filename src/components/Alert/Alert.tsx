import React from "react"
import { AllProps } from "./alert.d";
import { themeStyles, baseStyles, radiusStyles } from "./AlertStyles";

export default function Alert(props: AllProps) {
    
    const {
        children: text,
        className,
        theme,
        variant="default",
        radius="md",
        ...defaultProps
    } = props;
    
    const combinedStyles = 
    baseStyles
    +themeStyles[theme][variant] 
    +radiusStyles[radius] 
    +className

    return (
        <>
            <div
            className={combinedStyles}
            { ...defaultProps }
            >
            {text}</div>
        </>
    )
}
