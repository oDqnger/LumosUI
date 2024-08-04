import React, { forwardRef } from "react"
import { AllProps } from "./card.d"
import { baseStyles, radiusStyles } from "./CardStyles";
import "../../styles/output.css"

function Card(props: AllProps, ref) {
    
    const {
        children: text,
        className,
        radius="xl",
        ...defaultProps
    } = props;
    
    const combinedStyles = baseStyles + radiusStyles[radius] + className;

    return (
        <>
            <div
            ref={ref}
            className={combinedStyles}
            {...defaultProps}
            >{text}
            </div>
        </>
    )
}

export default forwardRef(Card);
