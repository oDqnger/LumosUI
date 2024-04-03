import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
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

    it("should return a ref of hr element of Divider component", () => {
        const dividerRef = createRef<HTMLHRElement>();
        const { container } = render(<Divider ref={dividerRef} />)
        // eslint-disable-next-line testing-library/no-node-access
        expect(dividerRef.current).toBeTruthy();
    })
})
