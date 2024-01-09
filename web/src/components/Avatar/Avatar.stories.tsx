import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    avatar: '/images/placeholder__avatar-01.png',
  },
}

export const Letter: Story = {
  args: {
    letter: 'D',
  },
}

export const Icon: Story = {
  args: {
    icon: 'check',
  },
}

export const WithSantaHat: Story = {
  args: {
    icon: 'check',
    isSantaHatVisible: true,
  },
}

export const WithIndicator: Story = {
  args: {
    icon: 'check',
    indicator: 'success',
  },
}
