import { ButtonHTMLAttributes } from "react";

type ColorTypes = "default" | "primary" | "secondary" | "success" | "warning" | "danger"
type RadiusTypes = "none" | "sm" | "md" | "lg" | "full"
type SizeTypes = "sm" | "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isDisabled?: boolean,
    overrideDefaultOnClick?: Function
}

interface DefaultProps {
    children?: any,
    className?: string,
}

interface StyledProps {
    color?: ColorTypes,
    radius?: RadiusTypes,
    size?: SizeTypes,
    customStyles?: string,
}

export type AllProps = ButtonProps & DefaultProps & StyledProps;
