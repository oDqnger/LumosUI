import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { render } from "@testing-library/react"
import { Button } from "../Button"

describe("Button component", () => {
    it("render button component", () => {
        const { container } = render(<Button>Click me!</Button>)
        expect(container).toBeInTheDocument()
    })
})
