import type { Meta, StoryObj } from '@storybook/react'

import RoundButton from '.'

const meta: Meta<typeof RoundButton> = {
  component: RoundButton,
}

export default meta

type Story = StoryObj<typeof RoundButton>

export const Success: Story = {
  args: {
    status: 'success',
  },
}

export const Warning: Story = {
  args: {
    status: 'warning',
  },
}

export const Error: Story = {
  args: {
    status: 'error',
  },
}
