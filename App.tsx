import { Text } from '@components';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.ReactNode {
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <Text mt='s20' variant='subTitleSlider'>Teste</Text>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

export default App;
