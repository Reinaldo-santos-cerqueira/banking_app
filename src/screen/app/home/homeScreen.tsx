import { ProfileImagem } from '@assets';
import { Box, Card, Icon, IconName, Profile, Screen } from '@components';
import React from 'react';
import { Pressable } from 'react-native';

interface propsArray {
    name: IconName
}

export function HomeScreen() {

    const btnArray: propsArray[] = [
        {
            name: 'sent',
        },
        {
            name: 'receive'
        },
        {
            name: 'loan'
        },
        {
            name: 'Topup'
        }
    ];

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
            <Card />
            <Box
                paddingVertical='s20'
                flexDirection='row'
                justifyContent='space-between'
            >
                {
                    btnArray.map((item, index) => (
                        <Pressable
                            key={index}
                        >
                            <Box
                                width={54}
                                height={54}
                                borderRadius='s27'
                                backgroundColor='backgroundContrast'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Icon name={item.name} />
                            </Box>
                        </Pressable>
                    ))
                }
            </Box>
            <Box>
            </Box>
        </Screen>
    );
}