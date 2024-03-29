

import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { IconBase } from '@components';

export function WifiIcon({ size = 20, color }: IconBase) {

    return (

        <Svg width={size} height={size} viewBox="0 -57 626 626" fill={color} style={{ transform: [{ rotate: '90deg' }] }} >
            <Path d="M64 166q51-51 116-77 64-26 133-26t134 26q64 26 115 77l-34 34q-44-44-99-66-56-23-116-23t-116 23q-56 22-99 66l-34-34Zm68 68q37-37 84-56t97-19q50 0 97 19t84 56l-34 34q-30-30-68-45-38-16-79-16t-79 16q-39 15-68 45l-34-34Zm68 68q23-23 52-35t61-12q32 0 61 12t52 35l-34 33q-16-16-37-24t-42-8q-22 0-42 8-21 8-37 24l-34-33Zm67 67q20-18 46-18t45 18l-45 46-46-46Z" />
        </Svg>

    );

}

