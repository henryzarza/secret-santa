import type { Meta, StoryObj } from '@storybook/react'

import RsvpButton from '.'

const meta: Meta<typeof RsvpButton> = {
  component: RsvpButton,
}

export default meta

type Story = StoryObj<typeof RsvpButton>

export const thumbsUp: Story = {
  args: {
    heading: "I'll be there",
    className: 'bg-spanishGreen text-white',
    icon: 'thumbsUp',
  },
}

export const thumbsDown: Story = {
  args: {
    heading: 'Regretfully Decline',
    className: 'bg-orangeRed text-white',
    icon: 'thumbsDown',
  },
}
