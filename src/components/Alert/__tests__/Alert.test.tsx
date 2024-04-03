import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
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

    it("should return a ref of div element of Alert component", () => {
        const alertRef = createRef<HTMLDivElement>();
        const { container } = render(<Alert theme="success" ref={alertRef}>Hello</Alert>)
        // eslint-disable-next-line testing-library/no-node-access
        expect(alertRef.current).toBeTruthy();
    })
})
