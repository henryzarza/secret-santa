import type { Meta, StoryObj } from '@storybook/react'

import Upload from '.'

const meta: Meta<typeof Upload> = {
  component: Upload,
  parameters: {
    backgrounds: {
      default: 'silverTree',
    },
  },
}

export default meta

type Story = StoryObj<typeof Upload>

export const Primary: Story = {}
