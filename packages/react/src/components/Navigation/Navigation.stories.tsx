import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Navigation } from './Navigation'

const meta = {
	title: 'Components/Navigation',
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
