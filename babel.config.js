module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        ['module-resolver', {
            root: '.',
            alias: {
                '@components': './src/components',
                '@screen': './src/screen',
                '@utils': './src/utils',
                '@routes': './src/routes',
                '@theme': './src/theme',
                '@hooks': './src/hooks',
                '@assets': './src/assets',
                '@domain': './src/domain',
                '@redux':'./src/redux'
            }
        }],
        'react-native-reanimated/plugin',
    ]
};
