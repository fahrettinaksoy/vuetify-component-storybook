import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
    title: 'Vuetify/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['flat', 'text', 'outlined', 'tonal', 'elevated', 'plain'],
        },
        color: { control: 'color' },
        size: {
            control: 'select',
            options: ['x-small', 'small', 'default', 'large', 'x-large'],
        },
        elevation: { control: { type: 'number', min: 0, max: 24, step: 1 } },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
    },
    args: {
        label: 'Button',
        variant: 'flat',
        color: 'primary',
        size: 'default',
        elevation: 2,
        disabled: false,
        onClick: fn(),
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Flat: Story = {
    args: { label: 'Flat Button', variant: 'flat' },
}

export const Outlined: Story = {
    args: { label: 'Outlined Button', variant: 'outlined' },
}

export const Tonal: Story = {
    args: { label: 'Tonal Button', variant: 'tonal' },
}

export const Elevated: Story = {
    args: { label: 'Elevated Button', variant: 'elevated' },
}

export const Text: Story = {
    args: { label: 'Text Button', variant: 'text' },
}

export const Plain: Story = {
    args: { label: 'Plain Button', variant: 'plain' },
}
