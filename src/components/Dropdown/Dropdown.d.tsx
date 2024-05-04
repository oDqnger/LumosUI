import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
    
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {

}

export type AllDropdownProps = DropdownProps;
export type AllOptionProps = OptionProps;
