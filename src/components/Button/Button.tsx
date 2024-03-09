import React from "react";
import { AllProps } from "./button.d";
import { buttonColors, buttonSizes, radiusStyles } from "./ButtonStyles"

export function Button(props: AllProps) {

    const {
    color="default",
    radius="lg",
    onClick: handleClick,
    size="md", 
    isDisabled=false, 
    children: text, 
    className="",
    ...defaultProps
    } = props;

    const buttonStyles = {
        normal: `border ${radiusStyles[radius]} ${buttonColors[color].normal} pr-7 pl-7 pt-2 pb-2 ${buttonColors[color].hover} transition ease-in-out ${className}`,
        clicked: `border ${radiusStyles[radius]} ${buttonColors[color].clicked} pr-7 pl-7 pt-2 pb-2 ${className}`,
        disable: `border ${radiusStyles[radius]} ${buttonColors[color].disable} pr-7 pl-7 pt-2 pb-2 ${className}`,
    };
    const selectDisabled = () => isDisabled ? buttonStyles.disable + buttonSizes[size]: buttonStyles.normal + buttonSizes[size];

    return (
        <button
        disabled={isDisabled}
        className={selectDisabled()}
        onClick={(e) => {
            const target = e.target as HTMLButtonElement;
            target.className = buttonStyles.clicked + buttonSizes[size];
            setTimeout(() => {
                target.className = buttonStyles.normal + buttonSizes[size];
            }, 50);
            if (handleClick) {
                handleClick(e);
            }
        }}
        {...defaultProps}
        >{text}</button>
    )
}
