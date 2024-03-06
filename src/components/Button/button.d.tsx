type ColorTypes = "default" | "primary" | "secondary" | "success" | "warning" | "danger"
type RadiusTypes = "none" | "sm" | "md" | "lg" | "full"
type SizeTypes = "sm" | "md" | "lg"

interface ButtonProps {
    isDisabled?: boolean,
    onClick?: Function,
}

interface DefaultProps {
    children?: any,
    className?: any,
}

interface StyledProps {
    color?: ColorTypes,
    radius?: RadiusTypes,
    size?: SizeTypes,
}

export type AllProps = ButtonProps & DefaultProps & StyledProps;
