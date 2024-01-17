import type { Meta, StoryObj } from '@storybook/react'

import Modal from './'

const meta: Meta<typeof Modal> = {
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const Error: Story = {
  render: () => (
    <Modal status="error">
      <p>Something</p>
    </Modal>
  ),
}

export const Success: Story = {
  render: () => (
    <Modal status="success">
      <p>Something</p>
    </Modal>
  ),
}

export const Warning: Story = {
  render: () => (
    <Modal status="warning">
      <p>Something</p>
    </Modal>
  ),
}
