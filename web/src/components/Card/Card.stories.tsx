import type { Meta, StoryObj } from '@storybook/react'

import Card from './'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    avatar: {
      avatar: '/images/placeholder__avatar-01.png',
    },
    name: 'Amy Dutton',
    email: 'amy@example.com',
    isCloseShowing: true,
  },
}

export const closeButtonNotShowing: Story = {
  args: {
    avatar: {
      avatar: '/images/placeholder__avatar-01.png',
    },
    name: 'Amy Dutton',
    email: 'amy@example.com',
    isCloseShowing: false,
  },
}
