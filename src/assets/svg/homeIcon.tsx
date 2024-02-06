import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconBase } from '@components';
export function HomeICon({ size = 20, color }: IconBase) {
    return (
        <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
            <Path d="M14.3005 13.9182H7.56445" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.606 19H6.60596C3.84456 19 1.60596 16.7614 1.60596 14V9.19998C1.60596 7.68108 2.29646 6.24447 3.48246 5.29568L7.48246 2.09567C9.30856 0.634775 11.9034 0.634775 13.7295 2.09567L17.7295 5.29568C18.9156 6.24447 19.606 7.68108 19.606 9.19998V14C19.606 16.7614 17.3674 19 14.606 19Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
}
