import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
import { render } from "@testing-library/react"
import Input from "../Input"

describe("Input component", () => {

    it("should match the snapshot", () => {
        const { container } = render(<Input type="email" />)
        expect(container).toMatchSnapshot()
    })

    it("should render input component", () => {
        const { container } = render(<Input type="email" />)
        expect(container).toBeInTheDocument()
    })

    it("should return a ref of input element of Input component", () => {
        const inputRef = createRef<HTMLInputElement>();
        const { container } = render(<Input type="password" ref={inputRef} />)
        // eslint-disable-next-line testing-library/no-node-access
        expect(inputRef.current).toBeTruthy();
    })
})
