import React, { forwardRef } from "react";
import { AllProps } from "./button.d";
import { buttonColors, buttonSizes, radiusStyles, baseStyles } from "./ButtonStyles"

function Button(props: AllProps, ref) {

    const {
    color="default",
    radius="lg",
    onClick: handleClick,
    size="md", 
    isDisabled=false, 
    children: text, 
    className="",
    customStyles=null,
    overrideDefaultOnClick,
    ...defaultProps
    } = props;

    const isDisabledOrNormal = isDisabled ? buttonColors[color].disable : buttonColors[color].normal + buttonColors[color].hover;

    const combinedStyles =
    className
    +baseStyles
    +radiusStyles[radius]
    +buttonSizes[size]
    +isDisabledOrNormal

    return (
        <button
        disabled={isDisabled}
        className={customStyles ?? combinedStyles}
        onClick={(e) => {
            if (customStyles == null || overrideDefaultOnClick == null) {
                const target = e.target as HTMLButtonElement;
                target.className = combinedStyles.replace(buttonColors[color].normal, buttonColors[color].clicked);
                setTimeout(() => {
                    target.className = combinedStyles
                }, 40);
            }

            if (overrideDefaultOnClick != null) {
                overrideDefaultOnClick();
            }
            
            if (handleClick) {
                handleClick(e);
            }
        }}
        ref={ref}
        {...defaultProps}
        >{text}</button>
    )
}

export default forwardRef(Button);
