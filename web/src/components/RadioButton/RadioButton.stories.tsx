import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import RadioButton from '.'

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  parameters: {
    backgrounds: {
      default: 'silverTree',
    },
  },
}

export default meta

type Story = StoryObj<typeof RadioButton>

export const Primary: Story = {
  render: () => (
    <Form>
      <RadioButton label="Radio 1" name="name" id="radio-1" value="radio-1" />
      <RadioButton label="Radio 2" name="name" id="radio-2" value="radio-2" />
      <RadioButton label="Radio 3" name="name" id="radio-3" value="radio-3" />
    </Form>
  ),
}
