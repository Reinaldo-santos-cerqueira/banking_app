import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppTabBottomTabParamsList, AppTabNavigator } from './appTab.routes';
import { NavigatorScreenParams } from '@react-navigation/native';


export type AppStackParams = {
    AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamsList>;
}


const Stack = createNativeStackNavigator<AppStackParams>();

export function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: true
            }}
            initialRouteName='AppTabNavigator'

        >
            <Stack.Screen component={AppTabNavigator} name={'AppTabNavigator'} />
        </Stack.Navigator>
    );
}