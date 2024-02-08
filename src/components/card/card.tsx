import React from 'react';
import { Box, Icon, Text } from '@components';
import { Image } from 'react-native';
import { CardBg } from '@assets';

export function Card() {
    return (
        <Box
            width={'100%'}
            height={200}
            backgroundColor={'bgCardArea'}
            borderRadius='s25'
            padding='s20'
            position='relative'
        >
            <Image source={CardBg} height={200} style={{ position: 'absolute', top: 0, left: 0, zIndex: -10 }} />
            <Box>
                <Box
                    flexDirection='row'
                    justifyContent='space-between'
                    mb='s10'
                >
                    <Icon name='cardChip' size={30} color='iconCard' />
                    <Icon name='wifi' size={30} color='iconCard' />
                </Box>
                <Box>
                    <Text variant='cardNumber'>
                        4562   1122   4595   7852
                    </Text>
                </Box>
                <Box
                    flexDirection='row'
                    mt='s10'
                >
                    <Box>
                        <Box>
                            <Text variant='textCard' mb='s10'>AR Jonson</Text>
                        </Box>
                        <Box
                            flexDirection='row'
                            gap='s20'
                        >

                            <Box>
                                <Text variant='labelCard'>Expery Date</Text>
                                <Text variant='textCard'>24/2000</Text>
                            </Box>
                            <Box>
                                <Text variant='labelCard'>CVV</Text>
                                <Text variant='textCard'>6986</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        justifyContent='flex-end'
                        alignItems='flex-end'
                        flex={1}
                    >
                        <Box
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Icon name='masterCard' />
                            <Text variant='textCard'>MasterCard</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}