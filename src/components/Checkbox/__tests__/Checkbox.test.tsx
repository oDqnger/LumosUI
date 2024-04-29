import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
import { fireEvent, render } from "@testing-library/react"
import Checkbox from "../Checkbox"
import "@testing-library/jest-dom"

describe("Checkbox component", () => {
    it("should render the checkbox component", () => {
        const { container } = render(<Checkbox />)
        expect(container).toBeInTheDocument();
    })

    it("should match the snapshot", () => {
        const { container } = render(<Checkbox />)
        expect(container).toBeInTheDocument();
    })

    // it("the onChange function should work", () => {
    //     const { container } = render(<Checkbox checked />)
    // })
})
