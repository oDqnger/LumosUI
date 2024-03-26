import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card"

const meta: Meta<typeof Card> = {
    component: Card,
}

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
    render: () => 
    <Card>
        <h1>Hello</h1>
    </Card>
}

export const RadiusNoneCard: Story = {
    render: () => 
    <Card radius="none">
        <h1>This is card with "none" radius</h1>
    </Card>
}

export const RadiusSmCard: Story = {
    render: () => 
    <Card radius="sm">
        <h1>This is card with "sm" radius</h1>
    </Card>
}

export const RadiusMdCard: Story = {
    render: () => 
    <Card radius="md">
        <h1>This is card with "md" radius</h1>
    </Card>
}

export const RadiusLgCard: Story = {
    render: () => 
    <Card radius="lg">
        <h1>This is card with "lg" radius</h1>
    </Card>
}

export const RadiusXlCard: Story = {
    render: () => 
    <Card radius="xl">
        <h1>This is card with "xl" radius</h1>
    </Card>
}

export const RadiusFullCard: Story = {
    render: () => 
    <Card radius="full">
        <h1>This is card with "full" radius</h1>
    </Card>
}

export const CustomCard: Story = {
    render: () => 
    <Card className="bg-slate-500 m-10 text-white font-extrabold p-10 border-2 border-black">
        <h1>Hi</h1>
        <p>This is a cool paragraph tag</p>
    </Card>
}
