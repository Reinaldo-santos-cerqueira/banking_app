import { Box, BoxProps, Icon, IconName, Text } from '@components';
import { TextInput as RNTextInput, TextInputProps, TextStyle } from 'react-native';
import React, { useState } from 'react';

export interface props extends TextInputProps {
    label: string;
    boxprops?: BoxProps;
    isPassword?: boolean;
    erroMessage?: string,
    icon: IconName;
}

export function TextInput({ label, boxprops, isPassword, erroMessage, icon, ...props }: props) {
    const [securityText, setSecurityText] = useState(false);
    return (
        <Box {...boxprops} borderBottomWidth={1} borderColor='gray2' mb='s20'>
            <Text variant='labelText'>{label}</Text>
            <Box flexDirection='row' gap='s16' alignItems='center' justifyContent='center' paddingHorizontal='s4'>
                <Icon name={icon} />
                <RNTextInput
                    {...props}
                    placeholderTextColor={'#545151'}
                    style={$inputStyle}
                    secureTextEntry={securityText}
                />
                {
                    isPassword && <Icon onPress={() => setSecurityText(!securityText)} name={securityText ? 'eye' : 'eyeOff'} />
                }
            </Box>
            {
                erroMessage && <Text color='error' variant='labelText'>{erroMessage}</Text>
            }
        </Box>
    );
}

const $inputStyle: TextStyle = {
    flex: 1,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400'
};
