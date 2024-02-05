import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import Checkbox from '.'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'silverTree',
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: () => (
    <Form>
      <Checkbox label="Radio 1" name="name" id="radio-1" value="radio-1" />
    </Form>
  ),
}
