import { ProfileImagem } from '@assets';
import { Box, Card, Icon, IconName, Profile, Screen, Text, Transaction } from '@components';
import { Transactions, transactionsService } from '@domain';
import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, Pressable } from 'react-native';

interface propsArray {
    name: IconName
}

export function HomeScreen() {
    const [transaction, setTransaction] = useState<Transactions[]>([]);
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

    useEffect(() => {
        (
            async () => {
                const transactionsGet = await transactionsService.get();
                setTransaction(transactionsGet);
            }
        )();
    }, []);
    const renderItem = ({ item }: ListRenderItemInfo<Transactions>) => (
        <Transaction {...item} />
    );

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
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <Box
                                width={54}
                                height={54}
                                borderRadius='s27'
                                backgroundColor='backgroundContrast'
                                justifyContent='center'
                                alignItems='center'
                                mb='s10'
                            >
                                <Icon name={item.name} />
                            </Box>
                            <Text textTransform='capitalize' >{item.name}</Text>

                        </Pressable>
                    ))
                }
            </Box>
            <Box
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
            >
                <Text variant='nameProfile'>Transaction</Text>
                <Pressable>
                    <Text variant='headerFlat'>See All </Text>
                </Pressable>
            </Box>
            <Box
                flex={1}
            >
                <FlatList
                    data={transaction}
                    renderItem={renderItem}
                />
            </Box>
        </Screen >
    );
}