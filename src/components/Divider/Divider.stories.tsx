import { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider"

const meta: Meta<typeof Divider> = {
    component: Divider,
}

export default meta;
type Story = StoryObj<typeof Divider>;

export const DefaultDivider: Story = {
    render: () => <Divider />,
}

export const VerticalDivider: Story = {
    render: () => <Divider orientation="vertical" />
}

export const DashedDivider: Story = {
    render: () => <Divider variants="dashed" />
}

export const DottedDivider: Story = {
    render: () => <Divider variants="dotted" />
}

export const RadiusNoneDivider: Story = {
    render: () => <Divider radius="none" />
}

export const RadiusSmDivider: Story = {
    render: () => <Divider radius="sm" />
}

export const RadiusMdDivider: Story = {
    render: () => <Divider radius="md" />
}

export const RadiusLgDivider: Story = {
    render: () => <Divider radius="lg" />
}

export const RadiusFullDivider: Story = {
    render: () => <Divider radius="full" />
}
