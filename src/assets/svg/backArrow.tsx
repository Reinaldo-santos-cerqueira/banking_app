import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components/icon/icon';

export function BackArrow({ size = 20, color = 'backgroundContrast' }: IconBase) {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <Path
                d="M13 4L7 10L13 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                fill={color}
            />
        </Svg>
    );
}
