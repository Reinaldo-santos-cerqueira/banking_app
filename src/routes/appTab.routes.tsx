import React from 'react';
import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { HomeScreen, MyCardScreen, SettingsScreen, StatisticsScreen } from '@screen';
import { AppTabBar } from './appTab';

export type AppTabBottomTabParamsList = {
    HomeScreen: undefined;
    MyCardScreen: undefined;
    StatisticsScreen: undefined;
    SettingsScreen: undefined;
}


const Tab = createBottomTabNavigator<AppTabBottomTabParamsList>();

export function AppTabNavigator() {
    function renderTabBar(props: BottomTabBarProps) {
        return <AppTabBar {...props} />;
    }
    return (
        <Tab.Navigator
            tabBar={renderTabBar}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} />
            <Tab.Screen name='MyCardScreen' component={MyCardScreen} />
            <Tab.Screen name='StatisticsScreen' component={StatisticsScreen} />
            <Tab.Screen name='SettingsScreen' component={SettingsScreen} />

        </Tab.Navigator>
    );
}