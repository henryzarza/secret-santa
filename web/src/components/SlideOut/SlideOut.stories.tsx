import type { Meta, StoryObj } from '@storybook/react'

import SlideOut from './'

const meta: Meta<typeof SlideOut> = {
  component: SlideOut,
}

export default meta

type Story = StoryObj<typeof SlideOut>

export const Primary: Story = {
  render: () => (
    <SlideOut toggleOpen={() => ({})} isOpen>
      <div className="text-white">SlideOut</div>
    </SlideOut>
  ),
}
