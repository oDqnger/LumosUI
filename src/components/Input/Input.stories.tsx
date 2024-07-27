import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input"
import "./../../styles/output.css"

const meta: Meta<typeof Input> = {
    component: Input,
}

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
    args: {
        disabled: true,
        type: "text",
        readOnly: false,
        required: false,
        sizes:"md",
        radius:"md"
    }
}
