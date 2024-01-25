import type { Meta, StoryObj } from '@storybook/react'

import CountFilter from '.'

const meta: Meta<typeof CountFilter> = {
  component: CountFilter,
}

export default meta

type Story = StoryObj<typeof CountFilter>

export const Success: Story = {
  args: { status: 'success', quantity: 3, text: "Accepted", isActive: false, handleSelected: () => ({}) },
}

export const Warning: Story = {
  args: { status: 'warning', quantity: 2, text: "Pending", isActive: false, handleSelected: () => ({}) },
}

export const Error: Story = {
  args: { status: 'error', quantity: 3, text: "Declined", isActive: false, handleSelected: () => ({}) },
}
