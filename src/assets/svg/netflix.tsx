/* eslint-disable @typescript-eslint/no-unused-vars */

import { IconBase } from '@components';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const Netflix = ({ size = 20, color }: IconBase) => (
    <Svg width={size} height={size} viewBox="0 0 32 32">
        <Path d="M7.75 2.316v28.679c2.341-.281 3.512-.39 5.892-.497V18.976zm10.608-1.312v12.034l5.89 16.646c-.054-9.822-.005-19.886.003-28.679zm-10.608 0v.008c3.784 10.692 6.711 18.963 10.432 29.487 2.929.072 6.061.497 6.066.497-3.499-9.902-7.402-20.928-10.606-29.991z" fill='#E50914' />
    </Svg>
);
