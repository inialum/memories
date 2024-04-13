import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from '@/components/Footer'

const meta = {
  title: 'Footer',
  component: Footer,
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
