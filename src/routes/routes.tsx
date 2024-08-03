import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { AuthStack } from './authStack.routes';
import { AppStack } from './appStack.routes';
import { useSelector } from 'react-redux';
import { RootState } from '@redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Router() {
    const [logged, setLogged] = useState<boolean>(false);
    const reduxLogged = useSelector((state: RootState) => state.login.logged);
  
    useEffect(() => {
        const fetchInitialValue = async () => {
            try {
                const loggedAsyncStorage = await AsyncStorage.getItem('logged');
  
                if (loggedAsyncStorage === 'true') {
                    setLogged(true);
                } else {
                    setLogged(reduxLogged);
                }
            } catch (error) {
                console.log('Erro ao obter o valor do AsyncStorage:', error);
            }
        };
  
        fetchInitialValue();
    }, [reduxLogged]);
    return (
        <NavigationContainer>
            {
                logged ? <AppStack /> : <AuthStack />
            }
        </NavigationContainer>
    );
}