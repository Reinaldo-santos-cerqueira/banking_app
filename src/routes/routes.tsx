import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthStack } from './authStack.routes';
import { AppStack } from './appStack.routes';

export function Router() {
    const logged = true;
    return (
        <NavigationContainer>
            {
                logged ? <AppStack /> : <AuthStack />
            }
        </NavigationContainer>
    );
}