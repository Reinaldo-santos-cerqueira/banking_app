
import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconBase } from '@components';

export function Spotify({ size = 20 }: IconBase) {
    return (
        <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
            <Path d="M12.8033 2.1967C15.7322 5.12564 15.7322 9.87438 12.8033 12.8033C9.87436 15.7322 5.12562 15.7322 2.1967 12.8033C-0.732234 9.87436 -0.732234 5.12562 2.1967 2.1967C5.12564 -0.732234 9.87438 -0.732234 12.8033 2.1967Z" fill="#1FAA47" />
            <Path d="M3.00781 5.11366C6.19865 4.16949 10.3628 4.82283 12.3037 6.05033" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M3.39062 7.54495C6.20146 6.66911 9.52063 7.29661 11.3565 8.47745" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M3.60449 9.79685C6.732 9.09518 8.90366 9.58768 10.5453 10.5727" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
}