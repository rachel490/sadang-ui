import _ from '../node_modules/@dwell_the/ui/dist/styles/design-system.scss'

// TODO: tresshaking 방지
console.log('_', _) // eslint-disable-line no-console

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
