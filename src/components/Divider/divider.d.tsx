type TypeOrientation = "horizontal" | "vertical";
type VariantType = "dotted" | "dashed"
type RadiusType = "none" | "sm" | "md" | "lg" | "full"

interface DefaultProps {
    className?: string,
}

interface DividerProps {
    orientation?: TypeOrientation,
}

interface StyledProps {
    variants?: VariantType,
    radius?: RadiusType,
}

export type AllProps = DividerProps & DefaultProps & StyledProps;
