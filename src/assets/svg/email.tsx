import React from 'react';

import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

import { IconBase } from '@components';



export function Email({ size = 20 }: IconBase) {

    return (

        <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">

            <G clipPath="url(#clip0_1_8664)">

                <Path d="M6.87354 8.93652L9.55633 10.5905C10.4416 11.1363 11.5589 11.1363 12.4442 10.5905L15.127 8.93652" stroke="#A2A2A7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

                <Path d="M2.74658 7.58057C2.74658 5.92371 4.08973 4.58057 5.74658 4.58057H16.2535C17.9103 4.58057 19.2535 5.92371 19.2535 7.58057V14.4192C19.2535 16.0761 17.9103 17.4192 16.2535 17.4192H5.74658C4.08973 17.4192 2.74658 16.0761 2.74658 14.4192V7.58057Z" stroke="#A2A2A7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

            </G>

            <Defs>

                <ClipPath id="clip0_1_8664">

                    <Rect width="22" height="22" fill="white" />

                </ClipPath>

            </Defs>

        </Svg>

    );

}

