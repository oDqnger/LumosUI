import React from "react";
import { sizeStyles, radiusStyles } from "./InputStyles";
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

    const selectRadius = () => radiusStyles[radius] ?? radiusStyles["lg"];
    const selectSize = () => sizeStyles[sizes] ?? sizeStyles["md"]

    const baseStyle = className + ` border-2 ${selectRadius()} ${selectSize()} font-semibold text-white`;
    const normalStyle = baseStyle + " transition ease-in-out hover:bg-gray-600 border-gray-500 bg-gray-500";
    const disabledStyle = baseStyle + " border-gray-800 bg-gray-800";
    const readOnlyStyle = baseStyle + " transition ease-in-out bg-gray-500 border-gray-600 hover:border-gray-700"

    const selectedStyle = () => {
        if (disabled) {
            return disabledStyle;
        } else if (readOnly) {
            return readOnlyStyle;
        } else {
            return normalStyle;
        }
    }

    return (
        <>
            <input
            className={selectedStyle()}
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
