import React, { forwardRef } from "react";
import { baseStyles, checkboxColors, checkboxSizes } from "./CheckboxStyles";
import { AllProps } from "./checkbox.d";

function Checkbox(props: AllProps, ref: any) {
    
    const {
        isDisabled,
        sizes="md",
        color="default",
        ...otherProps
    } = props;
    
    const allStyles =
    checkboxSizes[sizes]
    +baseStyles
    +checkboxColors[color];

    return (
        <>
            <input 
            ref={ref}
            type="checkbox"
            className={allStyles}
            disabled={isDisabled}
            {...otherProps}
            />
        </>
    )
}


export default forwardRef(Checkbox);
