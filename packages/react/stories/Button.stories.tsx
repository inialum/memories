import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/Button'

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '入会する',
    colorTheme: 'primary',
    size: 'medium',
    styleType: 'filled',
    radius: 'none',
  },
}

export const Outlined: Story = {
  args: {
    ...Default.args,
    styleType: 'outlined',
  },
}

export const Rounded: Story = {
  args: {
    ...Default.args,
    radius: 'rounded',
  },
}

export const MoreRounded: Story = {
  args: {
    ...Default.args,
    radius: 'moreRounded',
    children: 'more...',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
