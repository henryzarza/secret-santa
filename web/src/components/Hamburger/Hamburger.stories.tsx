import type { Meta, StoryObj } from '@storybook/react'

import Hamburger from '.'

const meta: Meta<typeof Hamburger> = {
  component: Hamburger,
}

export default meta

type Story = StoryObj<typeof Hamburger>

export const Primary: Story = {}
