import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
import { render, fireEvent } from "@testing-library/react"
import Snippet from "../Snippet"

describe("Snippet component", () => {
    it("render Snippet component", () => {
        const { container } = render(<Snippet>test</Snippet>)
        expect(container).toBeInTheDocument();
    })

    it("should match snapshot", () => {
        const { container } = render(<Snippet>test</Snippet>)
        expect(container).toMatchSnapshot();
    })

    it("should return a ref of div element of Snippet component", () => {
        const snippetRef = createRef<HTMLDivElement>();
        const { container } = render(<Snippet ref={snippetRef}>test</Snippet>)
        // eslint-disable-next-line testing-library/no-node-access
        expect(snippetRef.current).toBeTruthy();
    })
})
