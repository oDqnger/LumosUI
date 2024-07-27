import { HTMLAttributes } from "react";

type RadiusType = "none" | "sm" | "md" | "lg" | "xl" | "full";

interface DefaultProps extends HTMLAttributes<HTMLDivElement> {
    children?: any,
    className?: string,
}

interface StyledProps {
    radius?: RadiusType,
}

export type AllProps = DefaultProps & StyledProps;
