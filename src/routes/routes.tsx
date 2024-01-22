import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthStack } from './authStack.routes';

export function Router() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}