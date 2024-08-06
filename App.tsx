import { Provider } from 'react-redux';
import { Router } from '@routes';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {store} from '@redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.ReactNode {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider>
                    <ThemeProvider theme={theme}>
                        <Router />
                    </ThemeProvider>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </Provider>
    );
}

export default App;
