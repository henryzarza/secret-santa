import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import ShowHidePassword from './'

const meta: Meta<typeof ShowHidePassword> = {
  component: ShowHidePassword,
}

export default meta

type Story = StoryObj<typeof ShowHidePassword>

export const Primary: Story = {
  render: () => (
    <Form>
      <ShowHidePassword label="Password" name="password" />
    </Form>
  ),
}
