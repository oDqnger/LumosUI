import React, { forwardRef } from "react"
import { AllProps } from "./alert.d";
import { themeStyles, baseStyles, radiusStyles } from "./AlertStyles";
import "../../styles/output.css"

function Alert(props: AllProps, ref) {
    
    const {
        children: text,
        className,
        theme,
        variant="default",
        radius="md",
        ...defaultProps
    } = props;
    
    const combinedStyles = 
    className+" "
    +baseStyles
    +themeStyles[theme][variant] 
    +radiusStyles[radius] 
    
    return (
        <>
            <div
            className={combinedStyles}
            ref={ref}
            { ...defaultProps }
            >
            {text}</div>
        </>
    )
}

export default forwardRef(Alert);
