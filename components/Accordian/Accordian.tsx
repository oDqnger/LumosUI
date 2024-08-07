import React, { Children, cloneElement } from 'react' 
import AccordianItem from './AccordianItem'

export default function Accordian(props) {
    
    const {
        children: text,
    } = props;

    return (
        <>
            {
                Children.map(text, (child, index) => {
                    if (child.type === AccordianItem) {
                        return ( 
                            <>
                                {cloneElement(child, { key: index })}
                                <br /> 
                            </>
                        )
                    }
                })
            }
        </> 
    )
}
