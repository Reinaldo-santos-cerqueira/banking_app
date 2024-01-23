import { Box, Button, Screen, Text, TextInput } from '@components';
import { AuthScreenProps } from '@routes';
import React from 'react';
import { Pressable } from 'react-native';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
    return (
        <Screen canGoBack>
            <Text variant='titlePage' mb='s32'>Sign In</Text>
            <TextInput icon='email' label='Email address' placeholder='Enter email' />
            <TextInput icon='eye' label='Password' placeholder='Enter password' isPassword />
            <Button title='Sign In' mt={'s20'} mb='s32' />
            <Box flexDirection='row' justifyContent='center'>
                <Text variant='labelText'>{'I\'m a new user.'}</Text>
                <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text color='bluePrimary' fontFamily='Poppins-Medium' variant='labelText'>Sign In</Text>
                </Pressable>
            </Box>
        </Screen>
    );
}