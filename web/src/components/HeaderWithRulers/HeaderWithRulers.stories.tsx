import type { Meta, StoryObj } from '@storybook/react'

import HeaderWithRulers from './'

const meta: Meta<typeof HeaderWithRulers> = {
  component: HeaderWithRulers,
}

export default meta

type Story = StoryObj<typeof HeaderWithRulers>

export const Primary: Story = {
  args: {
    heading: 'Heading',
  },
}
