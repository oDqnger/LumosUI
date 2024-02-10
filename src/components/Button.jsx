export default function Button({ size="md", isDisabled=false, children: text }) {
    const buttonStyles = {
        normal: "border rounded-lg bg-sky-400 pr-7 pl-7 pt-2 pb-2 hover:bg-sky-500 transition ease-in-out",
        clicked: "border rounded-lg bg-sky-400 pr-3 pl-3 pt-2 pb-2 hover:bg-sky-500 transition ease-in-out",
        disable: "border rounded-lg bg-sky-700 pr-5 pl-5 pt-2 pb-2",
    };

    const buttonSizes = {
        "sm": buttonStyles.normal + "pr-3 pl-3 pt-1 pb-1 text-sm",
        "md": buttonStyles.normal,
        "lg": buttonStyles.normal + "pr-10 pl-10 pt-5 pb-5 text-lg",
    }

    return (
        <button disabled={isDisabled} className={
            isDisabled ? buttonStyles.disable : buttonSizes[size] === undefined ? buttonSizes["md"] : buttonSizes[size]
        }
        onClick={(e) => {
            e.target.className = buttonStyles.clicked;
            setTimeout(() => {
                e.target.className = buttonSizes[size] === undefined ? buttonSizes["md"] : buttonSizes[size];
            }, 100);
        }}
        >{text}</button>
    )
}