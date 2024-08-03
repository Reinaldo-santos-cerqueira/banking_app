import { Box, Button, Screen, Text, TextInputWithController } from '@components';
import { AuthScreenProps } from '@routes';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import {
    useForm
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from './loginSchema';
import { useDispatch } from 'react-redux';
import { AppDispatch, login } from '@redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
    const { control, formState, handleSubmit } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange'
    });

    const dispatch = useDispatch<AppDispatch>();

    const [loadingBtn, setLoadingBtn] = useState(false);

    const goToSignUp = () => {
        navigation.navigate('SignUpScreen');
    };
    const loginClick = async () => {
        setLoadingBtn(true);
        await new Promise(resolve => setTimeout(() => {            
            resolve('');
            try{
                AsyncStorage.setItem('logged','true');
                dispatch(login());
            }
            catch(e){
                console.log(e);
            }
            
        }, 1000));
        setLoadingBtn(false);
    };
    return (
        <Screen canGoBack>
            <Text variant='titlePage' mb='s32'>Sign In</Text>
            <TextInputWithController control={control} name='email' icon='email' label='Email address' placeholder='Enter email' />
            <TextInputWithController name='password' control={control} icon='padLock' label='Password' placeholder='Enter password' isPassword />
            <Button
                disabled={!formState.isValid}
                title='Sign In'     
                onPress={handleSubmit(loginClick)} loading={loadingBtn} mt={'s20'} mb='s32'
            />
            <Box flexDirection='row' justifyContent='center'>
                <Text variant='labelText'>{'I\'m a new user.'}</Text>
                <Pressable onPress={goToSignUp}>
                    <Text color='bluePrimary' fontFamily='Poppins-Medium' variant='labelText'>Sign In</Text>
                </Pressable>
            </Box>
        </Screen>
    );
}