import type { Meta, StoryObj } from "@storybook/react"
import Checkbox from "./Checkbox"
import "../../styles/output.css"

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const DefaultCheckbox: Story = {
    render: (args) => 
    <>
        <Checkbox {...args} />
    </>,
    argTypes: {
        checked: {
            control: { type: 'boolean' },
            description: 'Whether the checkbox is checked',
        },
        className: {
            control: 'text',
            description: 'Additional class names for the component',
        },
        isDisabled: {
            control: { type: 'boolean' },
            description: 'Whether the checkbox is disabled',
        },
        sizes: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of the checkbox',
        },
        color: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
            description: 'Color theme of the checkbox',
        },
    },
}
