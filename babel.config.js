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
                '@models': './src/models',
                '@api': './src/api',
                '@service': './src/service',
                '@theme': './src/theme',
                '@hooks': './src/hooks'
            }
        }]
    ]
};
