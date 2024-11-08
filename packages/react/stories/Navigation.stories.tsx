import { fn } from '@storybook/test'

import type { Meta, StoryObj } from '@storybook/react'

import { Navigation } from '@/components/Navigation'

const meta = {
	title: 'Navigation',
	component: Navigation,
	tags: ['!autodocs'],
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		isOpen: true,
		onClose: fn(),
	},
}
