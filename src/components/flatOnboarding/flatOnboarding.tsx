import { Box, Button } from '@components';
import React, { useCallback, useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { ArrayItems } from './arrayItem';
import { ItemFlat } from './itemFlat/item';

export function FlatOnboarding() {
    const [positionSlider, setPositionSlider] = useState(0);
    const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        setPositionSlider(Number(viewableItems[0].index));
    }, []);
    const flatListRef = useRef<FlatList>(null);
    const scrollNext = () => {
        flatListRef.current?.scrollToIndex({ animated: true, index: positionSlider + 1 > ArrayItems.length - 1 ? 0 : positionSlider + 1 });
    };
    return (
        <Box>
            <FlatList
                style={{ paddingTop: 100 }}
                data={ArrayItems}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator
                bounces={false}
                renderItem={(item) => {
                    const { svg, subTitle, title } = item.item;
                    return (
                        <ItemFlat
                            subTitle={subTitle}
                            svg={svg}
                            title={title}
                            selected={positionSlider}
                            data={ArrayItems}
                        />
                    );
                }}
                keyExtractor={(item) => item.svg + ''}
                ref={flatListRef}
                onViewableItemsChanged={onViewableItemsChanged}
            />
            <Button mt='s40' title="Next" onPress={scrollNext} />
        </Box>
    );
}