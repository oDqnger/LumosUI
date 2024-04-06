import { HTMLAttributes, ReactNode } from "react"

type TypoVariants = "heading" | "subheading" | "body" | "caption" | "button"
type TypoComponents = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
type TypoColors = "default" | "primary" | "secondary" | "success" | "warning" | "danger"
type TypoDisplay = "block" | "inline" | "inline-block" | "left" | "center" | "right" | "justify"

interface DefaultProps extends HTMLAttributes<HTMLSpanElement> {
    className?: string,
    children?: ReactNode | string,
}

interface StyledProps {
    variants?: TypoVariants,
    components?: TypoComponents,
    color?: TypoColors,
    display?: TypoDisplay
}

export type AllProps = StyledProps & DefaultProps;
