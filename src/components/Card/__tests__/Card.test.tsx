import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
import { render } from "@testing-library/react"
import Card from "../Card"

describe("Card component", () => {
    it("render card component", () => {
        const { container } = render(
            <>
                <Card radius="full" className="pr-10">
                    <span className="text-gray-600">Word of the day</span>
                    <h1 className="font-semibold text-2xl">be•nev•o•lent</h1>
                    <span className="text-gray-600">adjective</span>
                    <p className="mt-3 mb-3">well meaning and kindly.
                    <br />"a benevolent smile"</p>
                    <a href="www.youtube.com" className="text-sky-900">LEARN MORE</a>
                </Card>
            </>
        )
        expect(container).toMatchSnapshot()
    })

    it("should return a ref of div element of Card component", () => {
        const cardRef = createRef<HTMLDivElement>();
        const { container } = render(<Card ref={cardRef}>Hello</Card>)
        // eslint-disable-next-line testing-library/no-node-access
        expect(cardRef.current).toBeTruthy();
    })
})
