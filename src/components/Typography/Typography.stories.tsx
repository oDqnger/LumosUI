import type { Meta, StoryObj } from "@storybook/react"
import Typography from "./Typography"
import { Button } from "../Button"
import "../../styles/output.css"

const meta: Meta<typeof Typography> = {
    component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const DefaultTypography: Story = {
    render: (args) => 
    <>
        <Typography {...args}>Header 1</Typography>
    </>,
    argTypes: {
        variants: {
            control: { type: 'select' },
            options: ['heading', 'subheading', 'body', 'caption', 'button'],
            description: 'Variant of the typography',
        },
        components: {
            control: { type: 'select' },
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
            description: 'HTML component to be used',
        },
        color: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
            description: 'Color theme of the typography',
        },
        display: {
            control: { type: 'select' },
            options: ['block', 'inline', 'inline-block', 'left', 'center', 'right', 'justify'],
            description: 'Display style of the typography',
        },
        children: {
            control: 'text',
            description: 'Content inside the typography component',
        },
        className: {
            control: 'text',
            description: 'Additional class names for the component',
        },
    },
}
