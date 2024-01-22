import { Box } from '@components';
import React, { ReactElement } from 'react';
import { IArrayItems } from '../arrayItem';

interface props {
    selected: number;
    data: IArrayItems[];
}

export function Pagination({ selected, data }: props): ReactElement {
    return (
        <Box marginVertical={'s40'} flexDirection='row' alignItems='center' justifyContent='center' gap='s8' >
            {data.map((item, index) => (
                <Box
                    key={index}
                    width={selected === index ? 12 : 6}
                    height={6}
                    borderRadius='s5'
                    backgroundColor={selected === index ? 'bluePrimary' : 'backgroundContrast'}>
                </Box>
            ))}
        </Box>
    );
}