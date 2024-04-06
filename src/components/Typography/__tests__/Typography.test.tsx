import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
import { fireEvent, render } from "@testing-library/react"
import Typography from "../Typography"
import "@testing-library/jest-dom"

describe("Typography component", () => {
    it("should render Typography component into the page", () => {
        const { container } = render(<Typography variants='heading'>Hello</Typography>);
        expect(container).toBeInTheDocument();
    })

    it("should match snapshot of Typography component", () => {
        const { container } = render(<Typography variants='heading'>Hello</Typography>);
        expect(container).toMatchSnapshot();
    })
})
