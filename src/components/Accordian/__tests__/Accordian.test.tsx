import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { fireEvent, render } from "@testing-library/react"
import Accordian from "../Accordian"
import AccordianItem from '../AccordianItem';
import "@testing-library/jest-dom"

describe("Accordian component", () => {
    it("should render Accordian component", () => {
        const { container } = render(<Accordian></Accordian>)
        expect(container).toBeInTheDocument();
    })

    it("should match snapshot", () => {
        const { container } = render(<Accordian></Accordian>);
        expect(container).toMatchSnapshot();
    })

    it("should not allow anything other than AccordianItem component to render", () => {
        const { container: c1 } = render(
        <>
            <Accordian>Hello</Accordian>
        </>)
        expect(c1).toBeEmptyDOMElement()

        const { container: c2 } = render(
        <>
            <Accordian>
                <AccordianItem>Hello bro</AccordianItem>
            </Accordian>
        </>)
        expect(c1).toBeInTheDocument()
    })
})

describe("AccordianItem component", () => {
    it("should render Accordian component", () => {
        const { container } = render(<AccordianItem></AccordianItem>)
        expect(container).toBeInTheDocument();
    })

    it("should match snapshot", () => {
        const { container } = render(<AccordianItem></AccordianItem>);
        expect(container).toMatchSnapshot();
    })
})
