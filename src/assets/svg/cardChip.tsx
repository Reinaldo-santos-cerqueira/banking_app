import { IconBase } from '@components';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export function CardChip({ size = 20, color }: IconBase) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 29 25"
            fill="none"
        >
            <Path
                d="M14.5 15.5c0 2.061-.074 3.718-2 5m2.074-11.217c-.06-3.443-.13-5.27 1.426-5.783"
                stroke={color}
            />
            <Path
                d="M4 .5h21A3.5 3.5 0 0 1 28.5 4v17a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 21V4A3.5 3.5 0 0 1 4 .5Z"
                stroke={color}
            />
            <Path
                d="M5 3.5h19A1.5 1.5 0 0 1 25.5 5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Z"
                stroke={color}
            />
            <Path d="M3.5 7.5h7v9h-7v-9Z" stroke={color}
            />
            <Path
                d="M3.5 12.5h7v4h-7v-4ZM10 9h9m0 6h-9m8.5-2.5h7v4h-7v-4Z"
                stroke={color}
            />
            <Path d="M18.5 7.5h7v9h-7v-9Z" stroke={color}
            />
        </Svg>
    );

}