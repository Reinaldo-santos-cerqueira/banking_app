

import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '@components';

export function StatisticsIcon({ size = 20, color }: IconBase) {

    return (

        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 4C4.358 4 1 7.358 1 11.5C1 15.642 4.358 19 8.5 19C12.642 19 16 15.642 16 11.5H8.5V4Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M19 8C19 4.134 15.866 1 12 1V8H19Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    );

}

