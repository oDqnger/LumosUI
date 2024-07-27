import '@testing-library/jest-dom/extend-expect';
import React, { createRef } from "react"
import { fireEvent, render } from "@testing-library/react"
import Button from "../Button"
import "@testing-library/jest-dom"

describe("Button component", () => {

    it("should match snapshot", () => {
        const { container } = render(<Button>Hello</Button>)
        expect(container).toMatchSnapshot();
    })

    it("should match snapshot for customStyles", () => {
        const { container } = render(<Button customStyles="border-2 bg-emerald-300">Hello</Button>)
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
    });

    it("fires the overrideDefaultOnClick function", () => {
        let testVar = false;
        let testVar2 = false;

        const { getByText: buttonTestOne } = render(<Button overrideDefaultOnClick={() => {
            testVar = true;
        }}>Click me!</Button>)

        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(buttonTestOne("Click me!"));
        expect(testVar).toBe(true);
        testVar = false;

        const { getByText: buttonTestTwo, container } = render(
        <Button overrideDefaultOnClick={() => {
            testVar = true;
        }} onClick={() => {
            testVar2 = true;
        }}
        customStyles="border-2 bg-slate-300 p-4"
        >Click me2!</Button>)

        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(buttonTestTwo("Click me2!"))
        expect(testVar).toBe(true);
        expect(testVar2).toBe(true);
        expect(container).toMatchSnapshot();
    })

    it("should render children", () => {
        const { container: button } = render(<Button><h1>Hello</h1></Button>)
        expect(button).toBeInTheDocument();
        expect(button).toMatchSnapshot();
    })

    it("should return a ref of button element of Button component", () => {
        const buttonRef = createRef<HTMLButtonElement>();
        const { container } = render(<Button ref={buttonRef}>Hello</Button>)
        // eslint-disable-next-line testing-library/no-node-access
        expect(buttonRef.current).toBeTruthy();
    })
})
