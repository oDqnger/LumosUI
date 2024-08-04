import React, { forwardRef } from "react";
import { sizeStyles, radiusStyles, baseStyle, readOnlyStyle, disabledStyle } from "./InputStyles";
import { AllProps } from "./input.d"
import "../../styles/output.css"

function Input(props: AllProps, ref) {

    const {
        type,
        disabled,
        readOnly,
        required,
        defaultValue,
        sizes="md",
        radius="md",
        className,
        ...defaultProps
    } = props;

    const selectDisabled = () => disabled ? disabledStyle : "";
    const selectReadOnly = () => readOnly ? readOnlyStyle : "";

    const combinedStyles = 
    className
    +baseStyle
    +radiusStyles[radius]
    +sizeStyles[sizes]
    +selectDisabled()
    +selectReadOnly()

    return (
        <>
            <input
            className={combinedStyles}
            type={type}
            defaultValue={defaultValue}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            ref={ref}
            { ...defaultProps }
            />
        </>
    )
}

export default forwardRef(Input);
