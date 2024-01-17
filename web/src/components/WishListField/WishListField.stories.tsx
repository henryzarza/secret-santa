import type { Meta, StoryObj } from '@storybook/react'

import WishListField from './'

const meta: Meta<typeof WishListField> = {
  component: WishListField,
}

export default meta

type Story = StoryObj<typeof WishListField>

export const Primary: Story = {
  args: {
    number: 1,
    name: 'wishList',
    roundButton: {
      status: 'success',
    },
  },
}
