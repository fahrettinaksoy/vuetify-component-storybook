// .storybook/main.ts
import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-vitest',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    features: {
        experimental_disableV7CoreLockdown: true,
    },
    core: {
        disableTelemetry: true,
    },
    viteFinal: async (config) => {
        config.optimizeDeps ||= {}
        config.optimizeDeps.include ||= []
        config.optimizeDeps.include.push('vuetify', 'vue', 'vue-router')
        config.resolve ||= {}
        config.resolve.alias ||= {}
        config.resolve.alias['vuetify'] = 'vuetify'
        return config
    },
}

export default config
