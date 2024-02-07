import { CardBg, ProfileImagem } from '@assets';
import { Box, Icon, Profile, Screen } from '@components';
import React from 'react';
import { Image } from 'react-native';

export function HomeScreen() {
    return (
        <Screen>
            <Box
                flexDirection='row'
                mb='s20'
                mt='s20'
            >
                <Profile name='Reinaldo Santos' title='Welcome back' photo={ProfileImagem} />
                <Icon name='search' color='grayWhite' colorArea='backgroundContrast' />
            </Box>
            <Box
                width={'100%'}
                height={200}
                backgroundColor={'bgCardArea'}
                borderRadius='s25'
                position='relative'
            >
                <Image source={CardBg} height={200} style={{ position: 'absolute', top: 0, left: 0 }} />
            </Box>
        </Screen>
    );
}