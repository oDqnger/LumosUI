import React from "react"
import { AllProps } from "./divider.d"
import { baseStyle, radiusStyles, variantStyles, orientationStyles } from "./DividierStyles"

export default function Divider(props: AllProps) {
    
    const {
        className,
        orientation="horizontal",
        variants="solid",
        radius="md"
    } = props;
    
    const combinedStyles = 
    baseStyle 
    +radiusStyles[radius] 
    +variantStyles[variants] 
    +orientationStyles[orientation] 
    +className;

    return (
        <hr className={combinedStyles} />
    )
}