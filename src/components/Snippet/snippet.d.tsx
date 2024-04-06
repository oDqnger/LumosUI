import { HTMLAttributes } from "react";

type SizeTypes = "sm" | "md" | "lg"

export default interface SnippetProps extends HTMLAttributes<HTMLDivElement> {
    size?: SizeTypes,
    children?: any,
    symbol?: string,
    copy?: boolean,
    className?: any,
}