import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthStack } from './authStack.routes';
import { AppStack } from './appStack.routes';
import { useSelector } from 'react-redux';
import { RootState } from '@redux';

export function Router() {
    const logged = useSelector((state: RootState) => state.login.logged);

    return (
        <NavigationContainer>
            {
                logged ? <AppStack /> : <AuthStack />
            }
        </NavigationContainer>
    );
}