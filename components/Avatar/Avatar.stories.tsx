import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar"

const meta: Meta<typeof Avatar> = {
    component: Avatar,
}

export default meta;
type Story = StoryObj<typeof Avatar>;

export const DefaultAvatar: Story = {
    render: (args) => <Avatar {...args} src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />,
    argTypes: {
        src: { control: 'text' },
        name: { control: 'text' },
        className: { control: 'text' },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl']
        },
        radius: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'full']
        },
        color: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
        }
    }
}

// export const SmAvatar: Story = {
//     render: () => <Avatar size="sm" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const MdAvatar: Story = {
//     render: () => <Avatar size="md" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const LgAvatar: Story = {
//     render: () => <Avatar size="lg" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const XlAvatar: Story = {
//     render: () => <Avatar size="xl" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const RadiusNoneAvatar: Story = {
//     render: () => <Avatar radius="none" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const RadiusSmAvatar: Story = {
//     render: () => <Avatar radius="sm" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const RadiusMdAvatar: Story = {
//     render: () => <Avatar radius="md" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const RadiusLgAvatar: Story = {
//     render: () => <Avatar radius="lg" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const RadiusFullAvatar: Story = {
//     render: () => <Avatar radius="full" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const ColorDefaultAvatar: Story = {
//     render: () => <Avatar color="default" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const ColorPrimaryAvatar: Story = {
//     render: () => <Avatar color="primary" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const ColorSecondaryAvatar: Story = {
//     render: () => <Avatar color="secondary" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const ColorSuccessAvatar: Story = {
//     render: () => <Avatar color="success" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const ColorWarningAvatar: Story = {
//     render: () => <Avatar color="warning" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const ColorDangerAvatar: Story = {
//     render: () => <Avatar color="danger" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }

// export const NamedAvatar: Story = {
//     render: () => <Avatar name="Bob" />
// }

// export const CustomAvatar: Story = {
//     render: () => <Avatar className="border-2 border-teal-600 text-2xl w-32 h-32" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} />
// }
