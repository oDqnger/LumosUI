type RadiusType = "none" | "sm" | "md" | "lg" | "xl" | "full";

interface DefaultProps {
    children?: any,
    className?: string,
}

interface StyledProps {
    radius?: RadiusType,
}

export type AllProps = DefaultProps & StyledProps;
