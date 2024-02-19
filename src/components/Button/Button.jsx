import PropTypes from 'prop-types'

export function Button(props) {

    const {
        color="default",
        radius="lg",
        onClick: handleClick,
        size="md", 
        isDisabled=false, 
        children: text, 
        className,
        ...defaultProps
        } = props;


    const buttonColors = {
        "default": {
            normal: "bg-zinc-500",
            clicked: "bg-zinc-200",
            disable: "bg-zinc-700",
            hover: "hover:bg-zinc-600"
        },
        "primary": {
            normal: "bg-sky-500",
            clicked: "bg-sky-200",
            disable: "bg-sky-700",
            hover: "hover:bg-sky-600"
        },
        "secondary": {
            normal: "bg-violet-600",
            clicked: "bg-violet-300",
            disable: "bg-violet-800",
            hover: "hover:bg-violet-700"
        },
        "success": {
            normal: "bg-green-500",
            clicked: "bg-green-200",
            disable: "bg-green-700",
            hover: "hover:bg-green-600"
        },
        "warning": {
            normal: "bg-amber-600",
            clicked: "bg-amber-300",
            disable: "bg-amber-800",
            hover: "hover:bg-amber-700"
        },
        "danger": {
            normal: "bg-red-600",
            clicked: "bg-red-300",
            disable: "bg-red-800",
            hover: "hover:bg-red-700"
        }
    }
    
    const radiusStyles = {
        "none": "rounded-none",
        "sm": "rounded-sm",
        "md": "rounded",
        "lg": "rounded-lg",
        "full": "rounded-full"
    }

    const buttonStyles = {
        normal: `border ${radiusStyles[radius] ?? radiusStyles["full"]} ${buttonColors[color].normal ?? buttonColors["default"].normal} pr-7 pl-7 pt-2 pb-2 ${buttonColors[color].hover ?? buttonColors["default"].hover} transition ease-in-out ${className ?? ""}`,
        clicked: `border ${radiusStyles[radius] ?? radiusStyles["full"]} ${buttonColors[color].clicked ?? buttonColors["default"].clicked} pr-7 pl-7 pt-2 pb-2 ${className ?? ""}`,
        disable: `border ${radiusStyles[radius] ?? radiusStyles["full"]} ${buttonColors[color].disable ?? buttonColors["default"].disable} pr-7 pl-7 pt-2 pb-2 ${className ?? ""}`,
    };

    const buttonSizes = {
        "sm": "pr-3 pl-3 pt-1 pb-1 text-sm",
        "md": "",
        "lg": "pr-10 pl-10 pt-5 pb-5 text-lg",
    }

    return (
        <button disabled={isDisabled} className={
            isDisabled ? buttonStyles.disable + (buttonSizes[size] ?? buttonSizes["md"]): buttonStyles.normal + (buttonSizes[size] ?? buttonSizes["md"])
        }
        onClick={(e) => {
            e.target.className = buttonStyles.clicked + (buttonSizes[size] ?? buttonSizes["md"]);
            setTimeout(() => {
                e.target.className = buttonStyles.normal + (buttonSizes[size] ?? buttonSizes["md"]);
            }, 50);
            if (handleClick) {
                handleClick(e);
            }
        }}
        {...defaultProps}
        >{text}</button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    radius: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
}
