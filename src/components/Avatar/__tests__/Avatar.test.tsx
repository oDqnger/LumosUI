import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
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

    it("should return a ref of img element of Avatar component", () => {
        const avatarRef = createRef<HTMLImageElement | HTMLDivElement>();
        const { container } = render(<Avatar name='bob' ref={avatarRef} />)
        // eslint-disable-next-line testing-library/no-node-access
        expect(avatarRef.current).toBeTruthy();
    })
})
