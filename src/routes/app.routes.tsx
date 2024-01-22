import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screen';


export type AppStackParams = {
    HomeScreen: undefined;
}
const Stack = createNativeStackNavigator<AppStackParams>();

export function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: true
            }}
            initialRouteName='HomeScreen'

        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    );
}