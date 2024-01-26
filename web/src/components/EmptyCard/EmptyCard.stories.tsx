import type { Meta, StoryObj } from '@storybook/react'

import EmptyCard from '.'

const meta: Meta<typeof EmptyCard> = {
  component: EmptyCard,
}

export default meta

type Story = StoryObj<typeof EmptyCard>

export const Primary: Story = {}
