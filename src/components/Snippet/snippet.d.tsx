type SizeTypes = "sm" | "md" | "lg"

export default interface SnippetProps {
    size?: SizeTypes,
    children?: any,
    symbol?: string,
    copy?: boolean,
    className?: any,
}