import { Meta, StoryObj } from "@storybook/react";
import Snippet from "./Snippet"
import "./../../styles/output.css"

const meta: Meta<typeof Snippet> = {
    component: Snippet,
}

export default meta;
type Story = StoryObj<typeof Snippet>;

export const DefaultSnippet: Story = {
    render: () => 
        <>
            <Snippet>
                cd Desktop
            </Snippet>
            <Snippet>
                <span>npx create-react-app my-app</span>
                <span>cd app</span>
                <span>npm run</span>
            </Snippet>
        </>,
}

export const SizeSnippet: Story = {
    render: () => 
        <>
            <Snippet size="sm">
                cd Desktop
            </Snippet>
            <Snippet size="md">
                cd Desktop
            </Snippet>
            <Snippet size="lg">
                cd Desktop
            </Snippet>
        </>,
}

export const WithoutCopySnippet: Story = {
    render: () => 
        <>
            <Snippet copy>
                cd Desktop
            </Snippet>
        </>,
}

export const CustomSymbolSnippet: Story = {
    render: () => 
        <>
            <Snippet symbol="+">
                cd Desktop
            </Snippet>
        </>,
}

export const CustomSnippet: Story = {
    render: () => 
        <>
            <Snippet className="bg-green-300 hover:border-black transition ease-in-out" symbol="+">
                cd Desktop
            </Snippet>
        </>,
}
