import React, { forwardRef, Children } from "react"
import { AllOptionProps, AllDropdownProps } from "./Dropdown.d" 
import { dropdownBaseStyles } from "./DropdownStyles";

const Option = forwardRef((props: AllOptionProps, ref: any) => {
    
    const {
        children,
        ...other
    } = props;
    
    return (
        <>
            <option ref={ref} {...other}>{children}</option>
        </>
    )
})

const Dropdown = forwardRef((props: AllDropdownProps, ref: any) => {
    
    const {
        children,
        ...other
    } = props;

    const results: any[] = []

    return (
        <>
            {Children.forEach(children, (child) => {
                results.push(child);
            })}
            <select
            ref={ref}
            className={dropdownBaseStyles}
            {...other}>
                {results}
            </select>
        </>
    )
})

Dropdown.displayName = "Dropdown"
Option.displayName = "Option"
export { Dropdown, Option }
