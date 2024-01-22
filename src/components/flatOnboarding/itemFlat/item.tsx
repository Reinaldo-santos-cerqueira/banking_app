import { Box, Text } from '@components';
import React, { ReactElement } from 'react';
import { IArrayItems } from '../arrayItem';
import { Onboarding1, Onboarding2, Onboarding3 } from '@assets';
import { useWindowDimensions } from 'react-native';
import { Pagination } from '../pagination/pagination';

interface props extends IArrayItems {
    selected: number;
    data: IArrayItems[];
}

export function ItemFlat({ svg, title, subTitle, selected, data }: props): ReactElement {
    const { width } = useWindowDimensions();
    return (
        <Box width={width - 40}>
            {svg === 1 && <Onboarding1 />}
            {svg === 2 && <Onboarding2 />}
            {svg === 3 && <Onboarding3 />}
            <Pagination selected={selected} data={data} />
            <Text variant='titleSlider'>{title}</Text>
            <Text variant='subTitleSlider'>{subTitle}</Text>
        </Box>
    );
}