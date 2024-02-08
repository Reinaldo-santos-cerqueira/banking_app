import React from 'react';
import { Box, Icon, Text } from '@components';
import { Transactions } from '@domain';

export function Transaction(item: Transactions) {
    return (
        <Box
            margin='s10'
            alignItems='center'
            justifyContent='space-between'
            flexDirection='row'
        >
            <Box
                flexDirection='row'
                gap='s10'
                alignItems='center'
            >
                <Box width={42} height={42} borderRadius='s21' justifyContent='center' alignItems='center' bg='backgroundContrast'>
                    <Icon name={item.icon} size={20} />
                </Box>
                <Box
                    flexDirection='column'
                >
                    <Text variant='textFlatTitle'>{item.name}</Text>
                    <Text variant='textFlat'>{item.purpose}</Text>
                </Box>
            </Box>
            <Box>
                <Text variant='textFlatTitle' color={item.type === 'R' ? 'greenPrimary' : 'redLight'}>
                    {item.type === 'R' ? '' : '-'} ${item.value}
                </Text>
            </Box>
        </Box>
    );
}