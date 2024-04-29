import type { Meta, StoryObj } from "@storybook/react"
import Checkbox from "./Checkbox"
import "../../styles/output.css"

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const DefaultCheckbox: Story = {
    render: () => 
    <>
        <Checkbox isDisabled />
        <Checkbox />
    </>
}
