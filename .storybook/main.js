module.exports = {
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  stories: ['../src/__stories__/*.stories.tsx'],
webpackFinal: async config => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
},
};
