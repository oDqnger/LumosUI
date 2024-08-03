import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert"

const meta: Meta<typeof Alert> = {
    component: Alert,
}

export default meta;
type Story = StoryObj<typeof Alert>;

export const SuccessAlert: Story = {
    render: (args) => {
        return (
            <Alert {...args}>Hello</Alert>
        )
    },
    argTypes: {
        theme: {
            control: { type: 'select' },
            options: ['success', 'info', 'warning', 'error'],
            description: 'Theme of the component',
        },
        variant: {
            control: { type: 'select' },
            options: ['filled', 'outlined'],
            description: 'Variant of the component',
        },
        radius: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'full'],
            description: 'Border radius of the component',
        },
        children: {
            control: 'text',
            description: 'Content inside the component',
        },
        className: {
            control: 'text',
            description: 'Additional class names for the component',
        },
    },
    args: {
        theme: "success"
    }
}
