import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { render } from "@testing-library/react"
import Alert from "../Alert"

describe("Alert component", () => {
    it("render alert component", () => {
        const { container } = render(<Alert theme='success'>HI</Alert>)
        expect(container).toBeInTheDocument()
    })

    it("should match snapshot", () => {
        const { container } = render(<Alert theme="success">Hello</Alert>)
        expect(container).toMatchSnapshot();
    })
})
