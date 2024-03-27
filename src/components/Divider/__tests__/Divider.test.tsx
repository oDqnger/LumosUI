import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { render } from "@testing-library/react"
import Divider from "../Divider"

describe("Divider component", () => {
    it("render divider component", () => {
        const { container } = render(<Divider />)
        expect(container).toBeInTheDocument()
    })

    it("should match snapshot", () => {
        const { container } = render(<Divider />)
        expect(container).toMatchSnapshot();
    })
})
