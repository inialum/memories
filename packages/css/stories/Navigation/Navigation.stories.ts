import { within } from '@storybook/test'

import { type NavigationProps, createNavigation } from './Navigation'

import type { Meta, StoryObj } from '@storybook/html'

const meta = {
	title: 'Navigation',
	tags: ['autodocs'],
	render: (args) => createNavigation(args),
} satisfies Meta<NavigationProps>

export default meta
type Story = StoryObj<NavigationProps>

export const Default: Story = {
	args: {},
	render: (args) => {
		const divElem = document.createElement('div')

		const nav = createNavigation(args)
		divElem.append(nav)

		const buttonElem = document.createElement('button')
		buttonElem.type = 'button'
		buttonElem.innerText = 'Open'
		buttonElem.addEventListener('click', () => nav.showModal())
		divElem.append(buttonElem)

		return divElem
	},
}

export const Open: Story = {
	args: {},
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const navigation = canvas.getByRole<HTMLDialogElement>('dialog', {
			hidden: true,
		})
		navigation.showModal()
	},
}
