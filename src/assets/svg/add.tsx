import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconBase } from '@components';

export function Add({ size = 20 }: IconBase) {
    return (
        <Svg width={size} height="16" viewBox="0 0 16 16" fill="none" >
            <Path d="M8 1V15" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M15 8H1" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}
