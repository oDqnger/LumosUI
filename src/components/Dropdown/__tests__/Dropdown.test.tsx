import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
import { fireEvent, render } from "@testing-library/react"
import { Dropdown, Option } from "../Dropdown"
import "@testing-library/jest-dom"

describe("Dropdown component", () => {
    it("should render the component", () => {
        const { container } = render(<><Dropdown><Option>Hello</Option></Dropdown></>);
        expect(container).toBeInTheDocument();
    })

    it("should match the snapshot", () => {
        const { container } = render(<><Dropdown><Option>Hello</Option></Dropdown></>);
        expect(container).toMatchSnapshot();
    })
})
