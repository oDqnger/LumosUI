import React from "react";
import { sizeStyles, radiusStyles, baseStyle, readOnlyStyle, disabledStyle } from "./InputStyles";
import { AllProps } from "./input.d"

export default function Input(props: AllProps) {

    const {
        type,
        label,
        placeholder,
        autoComplete,
        autocapitalize,
        dirname,
        disabled,
        form,
        maxLength,
        minLength,
        max,
        min,
        multiple,
        name,
        pattern,
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
            placeholder={placeholder}
            aria-label={label}
            defaultValue={defaultValue}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            { ...defaultProps }
            />
        </>
    )
}
