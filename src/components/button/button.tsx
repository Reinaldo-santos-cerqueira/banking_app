import React from 'react';
import { Text } from '../text/text';
import {
    TouchableOpacityBox,
    TouchableOpacityBoxProps,
    ActivityIndicator
} from '@components';

interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
    disabled?: boolean;
}

export function Button(
    {
        title,
        loading,
        disabled,
        ...touchableOpacityProps
    }: ButtonProps
) {

    return (
        <TouchableOpacityBox
            disabled={disabled || loading}
            backgroundColor={'bluePrimary'}
            height={56}
            borderRadius='s12'
            alignItems='center'
            justifyContent='center'
            {...touchableOpacityProps}
        >
            {loading ?
                <ActivityIndicator color={'grayWhite'} />
                : <Text
                    variant='btnText'
                >
                    {title}
                </Text>
            }

        </TouchableOpacityBox>
    );
}