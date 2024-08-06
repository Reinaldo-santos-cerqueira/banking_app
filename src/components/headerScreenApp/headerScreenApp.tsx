import React from 'react';
import { Box, Icon, IconName, Text } from '@components';
import { useNavigation } from '@react-navigation/native';

interface props {
    titlePage: string;
    icon: IconName;
}

export function HeaderScreenApp({ titlePage, icon }: props) {
    const { goBack } = useNavigation();

    return (
        <>
            <Box
                paddingHorizontal='s20'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                mb='s20'
            >
                <Box width={42} height={42} borderRadius={'s42'} backgroundColor='backgroundContrast' alignItems='center' justifyContent='center'>
                    <Icon name='backArrow' onPress={goBack} />
                </Box>
                <Text variant='titlePagesApp'>
                    {titlePage}
                </Text>
                <Box width={42} height={42} borderRadius={'s42'} backgroundColor='backgroundContrast' alignItems='center' justifyContent='center'>
                    <Icon
                        name={icon}
                        onPress={() => {
                            console.log(1);
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}