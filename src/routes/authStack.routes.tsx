import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingScreen, LoginScreen, SignUpScreen } from '@screen';


export type AuthStackParams = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    OnboardingScreen: undefined;
}
const Stack = createNativeStackNavigator<AuthStackParams>();

export function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='OnboardingScreen'
            screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: true
            }}
        >
            <Stack.Screen name='OnboardingScreen' component={OnBoardingScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </Stack.Navigator>
    );
}