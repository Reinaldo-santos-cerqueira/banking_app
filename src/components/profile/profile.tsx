import React from 'react';
import { Box, Text } from '@components';
import { Image, ImageSourcePropType } from 'react-native';

interface props {
    title: string;
    name: string;
    photo: ImageSourcePropType
}

export function Profile({ title, name, photo }: props) {
    return (
        <Box
            flex={1}
            flexDirection='row'
            gap='s20'
        >
            <Image width={50} height={50} style={{ borderRadius: 25 }} source={photo} />
            <Box
                flexDirection='column'
            >
                <Text color='gray3' variant='titleProfile'>{title}</Text>
                <Text variant='nameProfile'>{name}</Text>
            </Box>
        </Box>
    );
}