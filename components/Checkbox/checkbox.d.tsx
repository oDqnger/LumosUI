import { InputHTMLAttributes } from "react";

type ColorTypes = "default" | "primary" | "secondary" | "success" | "warning" | "danger"
type SizeTypes = "sm" | "md" | "lg"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    isDisabled?: boolean,
    sizes?: SizeTypes,
    color?: ColorTypes
}

export type AllProps = CheckboxProps;
