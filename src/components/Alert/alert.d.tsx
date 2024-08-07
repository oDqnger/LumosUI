import { HTMLAttributes } from "react";

type ThemeTypes = "success" | "info" | "warning" | "error";
type VariantTypes = "filled" | "outlined" | "default";
type RadiusTypes = "none" | "sm" | "md" | "lg" | "full";

interface DefaultProps extends HTMLAttributes<HTMLDivElement> {
    children?: any,
    className?: string,
}

interface StyledProps { 
    theme: ThemeTypes,
    variant?: VariantTypes,
    radius?: RadiusTypes,
}

export type AllProps = DefaultProps & StyledProps;
