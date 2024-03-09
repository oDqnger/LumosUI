import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { render } from "@testing-library/react"
import Input from "../Input"

describe("Input component", () => {
    it("render input component", () => {
        const { container } = render(<Input type="email" />)
        expect(container).toBeInTheDocument()
    })
})
