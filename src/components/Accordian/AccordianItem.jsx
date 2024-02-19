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
            >{title}</Button>
            {
                displayContainer
                ?
                <>
                    <br/><div className='border-2 border-zinc-500 w-72 inline-block overflow-auto'>
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