import { Box, Button, Screen, Text, TextInput } from '@components';
import { AuthScreenProps } from '@routes';
import React from 'react';
import { Pressable } from 'react-native';

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
    return (
        <Screen canGoBack>
            <Text variant='titlePage' mb='s32'>Sign Up</Text>
            <TextInput icon='user' label='Full Name' placeholder='Enter full name' />
            <TextInput icon='phone' label='Phone Number' placeholder='Enter phone number' />
            <TextInput icon='email' label='Email address' placeholder='Enter email' />
            <TextInput icon='padLock' label='Password' placeholder='Enter password' isPassword />
            <Button title='Sign Up' mt={'s20'} mb='s32' />
            <Box flexDirection='row' justifyContent='center'>
                <Text variant='labelText'>{'Already have an account.'}</Text>
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text color='bluePrimary' fontFamily='Poppins-Medium' variant='labelText'>Sign Up</Text>
                </Pressable>
            </Box>
        </Screen>
    );
}