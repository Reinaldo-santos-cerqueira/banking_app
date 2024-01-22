import { OnBoardingScreen } from '@screen';
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
                <OnBoardingScreen />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

export default App;
