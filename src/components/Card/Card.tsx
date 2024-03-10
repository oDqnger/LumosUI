import React from "react"
import { AllProps } from "./card.d"
import { baseStyles, radiusStyles } from "./CardStyles";

export default function Card(props: AllProps) {
    
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
            className={combinedStyles}
            {...defaultProps}
            >{text}
            </div>
        </>
    )
}
