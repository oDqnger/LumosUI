export default function Input(props) {

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
        size,
        defaultValue,
        sizes,
        radius,
        className,
        ...defaultProps
    } = props;

    const inputTypes = [
        "email",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "url",
    ]

    const sizeStyles = {
        "sm": "pt-2 pb-2 pl-5 pr-5 text-sm",
        "md": "pt-3 pb-3 pl-7 pr-7 text-base",
        "lg": "pt-4 pb-4 pl-9 pr-9 text-lg"
    }

    const [radiusStyles, selectRadius] = [{
        "full": "rounded-full",
        "lg": "rounded-lg",
        "md": "rounded-md",
        "sm": "rounded-sm",
        "none": "rounded-none"
    }, () => radiusStyles[radius] ?? radiusStyles["lg"]]

    const baseStyle = className + `border-2 ${selectRadius()} ${sizeStyles[sizes] ?? sizeStyles["md"]} font-semibold text-white`;
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
            type={inputTypes.includes(type) ? type : "text"}
            placeholder={placeholder}
            aria-label={label}
            defaultValue={defaultValue}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            />
        </>
    )
}
