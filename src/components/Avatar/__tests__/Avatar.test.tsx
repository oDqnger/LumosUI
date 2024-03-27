import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { fireEvent, render } from "@testing-library/react"
import Avatar from "../Avatar"
import "@testing-library/jest-dom"

describe("Avatar component", () => {
    it("should match snapshot", () => {
        const { container } = render(<Avatar src={"https://i.pravatar.cc/150?u=a04258114e29026702d"} />)
        expect(container).toMatchSnapshot();
    })
    
    it("should render the component to the document", () => {
        const { container } = render(<Avatar />)
        expect(container).toBeInTheDocument();
    })
})
