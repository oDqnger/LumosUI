import type { Meta, StoryObj } from "@storybook/react"
import { Dropdown, Option } from "./Dropdown"
import "../../styles/output.css"

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DefaultDropdown: Story = {
    render: () => 
    <>
        <Dropdown>
            <Option selected>heyy</Option>
            <Option>WSG GOOD GANG</Option>
            
        </Dropdown>
    </>
}