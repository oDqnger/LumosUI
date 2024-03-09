import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { render } from "@testing-library/react"
import { Snippet } from "../Snippet"

describe("Snippet component", () => {
    it("render Snippet component", () => {
        const { container } = render(<Snippet>test</Snippet>)
        expect(container).toBeInTheDocument();
    })
})
