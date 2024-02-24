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
        value,
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

    return (
        <>
            <input
            className={`transition ease-in-out hover:bg-gray-600 border-2 border-gray-500 rounded-lg pt-3 pb-3 pl-7 pr-7 bg-gray-500 ${className} font-semibold text-white font-inter`}
            type={inputTypes.includes(type) ? type : "text"}
            placeholder={placeholder}
            aria-label={label}
            />
        </>
    )
}
