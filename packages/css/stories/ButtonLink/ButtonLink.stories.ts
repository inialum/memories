import { type ButtonLinkProps, createButtonLink } from './ButtonLink'

import type { Meta, StoryObj } from '@storybook/html'

const meta = {
  title: 'ButtonLink',
  tags: ['autodocs'],
  render: ({ label, ...args }) => createButtonLink({ label, ...args }),
  argTypes: {
    label: { control: 'text' },
    colorTheme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'white'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large', 'full-width'],
    },
    styleType: {
      control: {
        type: 'select',
      },
      options: ['filled', 'outlined'],
    },
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'rounded', 'more-rounded'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<ButtonLinkProps>

export default meta

type Story = StoryObj<ButtonLinkProps>

export const Default: Story = {
  args: {
    label: '入会する',
    colorTheme: 'primary',
    size: 'medium',
    styleType: 'filled',
    radius: 'none',
    disabled: false,
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
    radius: 'more-rounded',
    label: 'more...',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
