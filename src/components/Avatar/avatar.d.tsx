type SizeTypes = "sm" | "md" | "lg" | "xl" ;
type RadiusTypes = "none" | "sm" | "md" | "lg" | "full";
type ColorTypes = "default" | "primary" | "secondary" | "success" | "warning" | "danger" ;

interface AvatarProps {
    src?: any,
    name?: string,
    className?: string,
}

interface StyledProps {
    size?: SizeTypes,
    radius?: RadiusTypes,
    color?: ColorTypes,
}

export type AllProps = AvatarProps & StyledProps;
