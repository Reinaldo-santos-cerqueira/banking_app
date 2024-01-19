import { Text } from '@components';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

function App(): React.ReactNode {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <Text mt='s20' variant='subTitleSlider'>Teste</Text>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

export default App;
