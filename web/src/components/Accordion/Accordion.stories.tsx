import type { Meta, StoryObj } from '@storybook/react'

import Accordion from './'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  render: () => (
    <Accordion heading="Heading">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit placeat fugit quo quisquam, nulla numquam atque ullam ipsum, debitis cumque illo error, exercitationem tempore molestiae. Quidem animi nemo illo officia?
      </p>
    </Accordion>
  ),
}
