import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { Button } from "../Button"
import "@testing-library/jest-dom"

describe("Button component", () => {

    it("should match snapshot", () => {
        const { container } = render(<Button>Hello</Button>)
        expect(container).toMatchSnapshot();
    })

    it("render button component", () => {
        const { container } = render(<Button>Click me!</Button>)
        expect(container).toBeInTheDocument()
    })

    it("fires the onClick function", () => {
        let something = false;
        const { getByText } = render(<Button onClick={() => {
            something = true;
        }}>Click me!</Button>)
    

        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(getByText("Click me!"));
        expect(something).toBe(true);
    })
})
