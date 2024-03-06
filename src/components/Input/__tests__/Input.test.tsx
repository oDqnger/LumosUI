import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { render } from "@testing-library/react"
import Input from "../Input"

describe('Input Component', () => {
    it("should render input component", () => {
        const { getByLabelText } = render(<Input label="test" type="email" />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const inputBtn = getByLabelText("test");
        expect(inputBtn).toBeInTheDocument();
    })

    // it("should use input types accordingly", () => {
    //     const inputTypes = ["email", "number", "password", "search", "tel", "text", "url"];

    //     for (let typess of inputTypes) {
    //         let { getByLabelText } = render(<Input label="test" type={typess}></Input>)
    //         expect(getByLabelText("test")).toBeInTheDocument();
    //     }
    // })
})