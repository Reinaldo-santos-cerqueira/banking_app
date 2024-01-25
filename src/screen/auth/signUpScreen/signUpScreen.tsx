import { Box, Button, Screen, Text, TextInputWithController } from '@components';
import { AuthScreenProps } from '@routes';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { SignUpSchema, signupSchema } from './signUpSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
    const [loadingBtn, setLoadingBtn] = useState(false);

    const { control, formState, handleSubmit } = useForm<SignUpSchema>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            fullName: '',
            phone: '',
        },
        mode: 'onChange'
    });
    const signUp = async () => {
        setLoadingBtn(true);
        await new Promise(resolve => setTimeout(() => {
            resolve('');
        }, 2000));
        setLoadingBtn(false);

    };
    return (
        <Screen scrollable canGoBack>
            <Text variant='titlePage' mb='s32'>Sign Up</Text>
            <TextInputWithController name='fullName' control={control} icon='user' label='Full Name' placeholder='Enter full name' />
            <TextInputWithController
                name='phone'
                control={control}
                icon='phone'
                keyboardType='number-pad'
                label='Phone Number'
                placeholder='Enter phone number'
            />
            <TextInputWithController
                name='email'
                control={control}
                icon='email'
                label='Email address'
                placeholder='Enter email'
            />
            <TextInputWithController
                name='password'
                control={control}
                icon='padLock'
                label='Password'
                placeholder='Enter password'
                isPassword
            />
            <Button
                disabled={!formState.isValid}
                title='Sign Up'
                onPress={handleSubmit(signUp)} loading={loadingBtn} mt={'s20'} mb='s32'
            />
            <Box flexDirection='row' justifyContent='center'>
                <Text variant='labelText'>{'Already have an account.'}</Text>
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text color='bluePrimary' fontFamily='Poppins-Medium' variant='labelText'>Sign Up</Text>
                </Pressable>
            </Box>
        </Screen>
    );
}