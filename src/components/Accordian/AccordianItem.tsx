import React, { useState } from 'react'
import { Button } from "../Button"
import { containerStyles, buttonStyles } from './AccordianStyles';

export default function AccordianItem(props) {
    const {
        title,
        subtitle, 
        children: text,
        ...defaultProps
    } = props;

    const [displayContainer, setDisplayContainer] = useState(false);
    
    return (
        <>
            <Button
            className={buttonStyles}
            radius="none"
            onClick={(e) => {
                setDisplayContainer(!displayContainer)
            }}
            {...defaultProps}
            >{title}</Button>
            {
                displayContainer
                ?
                <>
                    <br/><div className={containerStyles}>
                        {text}
                    </div>
                </>
                :
                <></>
            }
        </>
 )
}