module.exports = {
  typescript: { reactDocgen: 'none' },
  stories: [
    '../src/components/**/*.story.mdx',
    '../src/components/**/*.story.@(js|jsx|ts|tsx)',
    '../src/components/**/story.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls'
  ]
}
