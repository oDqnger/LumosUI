type InputTypes = "email" | "number" | "password" | "search" | "tel" | "text" | "url";
type SizeTypes = "sm" | "md" | "lg"
type RadiusTypes = "none" | "sm" | "md" | "lg" | "full"

declare interface InputProps {
    type: InputTypes,
    label?: string,
    placeholder?: string,
    autoComplete?: boolean,
    autocapitalize?: boolean,
    dirname?,
    disabled?: boolean,
    form?,
    maxLength?: number,
    minLength?: number,
    max?: number,
    min?: number,
    multiple?: boolean,
    name?: any,
    pattern?: string,
    readOnly?: boolean,
    required?: boolean,
    defaultValue?: any,
}

declare interface DefaultProps {
    className?: string,
}

declare interface StyledProps {
    sizes?: SizeTypes,
    radius?: RadiusTypes,
}

export type AllProps = InputProps & DefaultProps & StyledProps;
