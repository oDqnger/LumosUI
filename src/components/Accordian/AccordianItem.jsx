import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from "../Button"

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
            className="border-b-5 border-slate-700 w-72 h-14"
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
                    <br/><div className='transition ease-in-out duration-300 border-2 border-zinc-500 w-72 inline-block overflow-auto opacity-100'>
                        {text}
                    </div>
                </>
                :
                <></>
            }
        </>
 )
}

AccordianItem.propTypes = {
    
}