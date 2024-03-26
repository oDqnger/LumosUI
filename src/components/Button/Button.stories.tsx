import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import "../../styles/output.css"

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const NormalButton: Story = {
    render: () => <Button>Button</Button>,
};

export const DisabledButton: Story = {
    render: () => <Button isDisabled>Button</Button>
}

export const PrimaryButton: Story = {
    render: () => <Button color="primary">Button</Button>
}

export const SecondaryButton: Story = {
    render: () => <Button color="secondary">Button</Button>
}

export const WarningButton: Story = {
    render: () => <Button color="warning">Button</Button>
}

export const DangerButton: Story = {
    render: () => <Button color="danger">Button</Button>
}

export const SuccessButton: Story = {
    render: () => <Button color="success">Button</Button>
}

export const DefaultButton: Story = {
    render: () => <Button color="default">Button</Button>
}

export const RadiusNoneButton: Story = {
    render: () => <Button radius="none">Button</Button>
}

export const RadiusSmallButton: Story = {
    render: () => <Button radius="sm">Button</Button>
}

export const RadiusMediumButton: Story = {
    render: () => <Button radius="md">Button</Button>
}

export const RadiusLargeButton: Story = {
    render: () => <Button radius="lg">Button</Button>
}

export const RadiusFullButton: Story = {
    render: () => <Button radius="full">Button</Button>
}

export const SizeSmallButton: Story = {
    render: () => <Button size="sm">Button</Button>
}

export const SizeMediumButton: Story = {
    render: () => <Button size="md">Button</Button>
}

export const SizeLargeButton: Story = {
    render: () => <Button size="lg">Button</Button>
}

export const CustomButton: Story = {
    render: () => <Button className="m-5 text-lg w-96">Button</Button>
}
