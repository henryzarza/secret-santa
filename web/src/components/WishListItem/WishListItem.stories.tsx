import type { Meta, StoryObj } from '@storybook/react'

import WishListItem from './'

const meta: Meta<typeof WishListItem> = {
  component: WishListItem,
}

export default meta

type Story = StoryObj<typeof WishListItem>

export const Primary: Story = {
  args: {
    number: 1,
    heading: 'iPhone 15',
    url: 'https://apple.com',
    siteTitle: 'iPhone 15 and iPhone 15 Plus',
    siteDescription:
      'iPhone 15 and iPhone 15 Plus. Dynamic Island. 48MP Main camera with 2x Telephoto. All-day battery life. USB-C. 6.1” and 6.7” sizes.',
    siteImage: '/images/placeholder__wish-list-image.png',
  },
}
