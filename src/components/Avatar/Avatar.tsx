import React, { forwardRef } from "react";
import { AllProps } from "./avatar.d";
import { avatarNameBaseStyles, avatarColors, avatarSizesSrc, avatarSizesName, radiusStyles } from "./AvatarStyles";

function Avatar(props: AllProps, ref) {
    
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
                <img ref={ref} src={src} className={combinedStylesSrc} alt={name} />
            </>
        )
    } else {
        return (
            <>
                <div ref={ref} className={combinedStylesName}>
                    <span className="text-sm">{name?.substring(0, 3)}</span>
                </div><br />
            </>
        )
    }
}

export default forwardRef(Avatar);
