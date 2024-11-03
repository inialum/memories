import { createHeader } from './Header'

import type { Meta, StoryObj } from '@storybook/html'

const meta = {
	title: 'Header',
	tags: ['autodocs'],
	render: () => createHeader(),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
