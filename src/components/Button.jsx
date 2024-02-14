import PropTypes from 'prop-types'

// TODO - add radius option
// TODO - add colors (with the ability to use your own custom colors.)
// TODO - add variants

export default function Button(props) {

    const {
        radius="lg",
        onClick: handleClick,
        size="md", 
        isDisabled=false, 
        children: text, 
        ...defaultProps
        } = props;

    const radiusStyles = {
        "none": "rounded-none",
        "sm": "rounded-sm",
        "md": "rounded",
        "lg": "rounded-lg",
        "full": "rounded-full"
    }

    const buttonStyles = {
        normal: `border ${radiusStyles[radius] ?? radiusStyles["full"]} bg-sky-400 pr-7 pl-7 pt-2 pb-2 hover:bg-sky-600 transition ease-in-out`,
        clicked: `border ${radiusStyles[radius] ?? radiusStyles["full"]} bg-sky-200 pr-7 pl-7 pt-2 pb-2`,
        disable: `border ${radiusStyles[radius] ?? radiusStyles["full"]} bg-sky-700 pr-5 pl-5 pt-2 pb-2`,
    };

    const buttonSizes = {
        "sm": buttonStyles.normal + " pr-3 pl-3 pt-1 pb-1 text-sm",
        "md": buttonStyles.normal,
        "lg": buttonStyles.normal + " pr-10 pl-10 pt-5 pb-5 text-lg",
    }

    return (
        <button disabled={isDisabled} className={
            isDisabled ? buttonStyles.disable: buttonSizes[size] ?? buttonSizes["md"]
        }
        onClick={(e) => {
            e.target.className = buttonStyles.clicked;
            setTimeout(() => {
                e.target.className = buttonSizes[size] ?? buttonSizes["md"];
            }, 50);
            this?.handleClick(e);
        }}
        {...defaultProps}
        >{text}</button>
    )
}

Button.propTypes = {
    
}
