import React, { forwardRef } from "react";
import { AllProps } from "./typography.d"
import { variantStyles, typoColors, typoDisplayStyles, typoComponentStyles } from "./TypographyStyles";

function Typography(props: AllProps, ref) {
    
    const {
        variants="body",
        color="default",
        components="none",
        display="justify",
        className,
        children,
        ...otherProps
    } = props;

    const combinedStyles = 
    className
    +typoComponentStyles[components]
    +variantStyles[variants] 
    +typoColors[color] 
    +typoDisplayStyles[display]

    return (
        <>
            <span 
            ref={ref}
            className={combinedStyles}
            { ...otherProps }
            >{children}</span><br />
        </>
    )
}

export default forwardRef(Typography);
