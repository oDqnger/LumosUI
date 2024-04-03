import React, { forwardRef } from "react"
import { AllProps } from "./divider.d"
import { baseStyle, radiusStyles, variantStyles, orientationStyles } from "./DividierStyles"

function Divider(props: AllProps, ref) {
    
    const {
        className,
        orientation="horizontal",
        variants="solid",
        radius="md"
    } = props;
    
    const combinedStyles = 
    className+" "
    +baseStyle 
    +radiusStyles[radius] 
    +variantStyles[variants] 
    +orientationStyles[orientation];

    return (
        <hr ref={ref} className={combinedStyles} />
    )
}

export default forwardRef(Divider);
