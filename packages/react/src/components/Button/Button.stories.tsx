import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Button } from './Button'

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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
		onClick: fn(),
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
