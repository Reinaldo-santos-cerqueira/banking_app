import { IconBase } from '@components';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const CartDown = ({ size = 20 }: IconBase) => (
    <Svg viewBox="0 0 24 24" width={size} height={size}>
        <Path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 6H11M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#861d1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);
