import React from "react";
import { AllProps } from "./avatar.d";
import { avatarNameBaseStyles, avatarColors, avatarSizesSrc, avatarSizesName, radiusStyles } from "./AvatarStyles";

export default function Avatar(props: AllProps) {
    
    const {
        src,
        name,
        size="md",
        radius="full",
        color="default",
        className,
    } = props;
    
    const combinedStylesSrc = `${className} ${radiusStyles[radius]} ${avatarSizesSrc[size]} ${avatarColors[color]} border-2`
    const combinedStylesName = `${className} ${avatarNameBaseStyles} ${radiusStyles[radius]} ${avatarSizesName[size]} ${avatarColors[color]}`

    if (src != null) {
        return (
            <>
                <img src={src} className={combinedStylesSrc} alt={name} />
            </>
        )
    } else {
        return (
            <>
                <div className={combinedStylesName}>
                    <span className="text-sm">{name?.substring(0, 3)}</span>
                </div><br />
            </>
        )
    }
}
