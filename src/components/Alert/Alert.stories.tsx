import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert"

const meta: Meta<typeof Alert> = {
    component: Alert,
}

export default meta;
type Story = StoryObj<typeof Alert>;

export const SuccessAlert: Story = {
    render: () => <Alert theme="success">This is a success alert</Alert>
}

export const InfoAlert: Story = {
    render: () => <Alert theme="info">This is an info alert</Alert>
}

export const WarningAlert: Story = {
    render: () => <Alert theme="warning">This is a warning alert</Alert>
}

export const ErrorAlert: Story = {
    render: () => <Alert theme="error">This is an error alert</Alert>
}

export const InfoRadiusNoneAlert: Story = {
    render: () => <Alert radius="none" theme="info">This is an info alert with radius none</Alert>
}

export const InfoRadiusSmAlert: Story = {
    render: () => <Alert radius="sm" theme="info">This is an info alert with radius sm</Alert>
}

export const InfoRadiusMdAlert: Story = {
    render: () => <Alert radius="md" theme="info">This is an info alert with radius md</Alert>
}

export const InfoRadiusLgAlert: Story = {
    render: () => <Alert radius="lg" theme="info">This is an info alert with radius lg</Alert>
}

export const InfoRadiusFullAlert: Story = {
    render: () => <Alert radius="full" theme="info">This is an info alert with radius full</Alert>
}

export const InfoVariantDefaultAlert: Story = {
    render: () => <Alert variant="default" theme="info">This is a default info alert</Alert>
}

export const InfoVariantOutlinedAlert: Story = {
    render: () => <Alert variant="outlined" theme="info">This is a outlined info alert</Alert>
}

export const InfoVariantFilledAlert: Story = {
    render: () => <Alert variant="filled" theme="info">This is a filled info alert</Alert>
}

export const CustomAlert: Story = {
    render: () => 
    <>
        <Alert className="text-sm" theme="info">This is a filled info alert</Alert>
    </>
}
