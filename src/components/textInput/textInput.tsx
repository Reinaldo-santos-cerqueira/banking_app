import { Box, BoxProps, Icon, IconName, Text } from '@components';
import { TextInput as RNTextInput, TextInputProps, TextStyle } from 'react-native';
import React, { useState } from 'react';

interface props extends TextInputProps {
    label: string;
    boxprops?: BoxProps;
    isPassword?: boolean;
    icon: IconName;
}

export function TextInput({ label, boxprops, isPassword, icon, ...props }: props) {
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
