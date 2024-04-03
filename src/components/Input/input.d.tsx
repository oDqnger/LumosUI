import { HTMLAttributes } from "react";

type InputTypes = "email" | "number" | "password" | "search" | "tel" | "text" | "url";
type SizeTypes = "sm" | "md" | "lg"
type RadiusTypes = "none" | "sm" | "md" | "lg" | "full"

declare interface InputProps extends HTMLAttributes<HTMLInputElement> {
    type: InputTypes,
    disabled?: boolean,
    readOnly?: boolean,
    required?: boolean,
    className?: string,
}

declare interface StyledProps {
    sizes?: SizeTypes,
    radius?: RadiusTypes,
}

export type AllProps = InputProps & StyledProps;
