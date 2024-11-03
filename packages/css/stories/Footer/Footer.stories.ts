import { createFooter } from './Footer'

import type { Meta, StoryObj } from '@storybook/html'

const meta = {
	title: 'Footer',
	render: () => createFooter(),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
