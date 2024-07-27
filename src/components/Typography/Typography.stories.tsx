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
    render: () => 
    <>
        <Typography components="h1">Header 1</Typography>
        <Typography components="h2">Header 2</Typography>
        <Typography components="h3">Header 3</Typography>
        <Typography components="h4">Header 4</Typography>
        <Typography components="h5">Header 5</Typography>
        <Typography components="h6">Header 6</Typography>
        <Typography components="p">Paragraph</Typography>

        <Typography variants="heading" className="text-center">Heading</Typography>
        <Typography variants="subheading" components="h2">Subheading</Typography>
        <Typography variants="body">Body</Typography>
        <Typography variants="button">Button</Typography>
        <Typography variants="caption">Caption</Typography>

    </>
}
