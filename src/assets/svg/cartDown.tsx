import { IconBase } from '@components';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const CartDown = ({ size = 20 }: IconBase) => (
    <Svg viewBox="0 0 59 59" width={size} height={size}>
        <Path d="M50 15a1 1 0 1 0 0 2h7v22H11V17h7a1 1 0 1 0 0-2h-7V7a1 1 0 0 0-1-1H7.858c-.447-1.72-2-3-3.858-3-2.206 0-4 1.794-4 4s1.794 4 4 4c1.858 0 3.411-1.28 3.858-3H9v39a1 1 0 0 0 1 1h7.031C15.806 48.912 15 50.359 15 52c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.641-.806-3.088-2.031-4h18.062C39.806 48.912 39 50.359 39 52c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.641-.806-3.088-2.031-4H53a1 1 0 1 0 0-2H11v-5h48V15h-9zM4 9c-1.103 0-2-.897-2-2s.897-2 2-2c.737 0 1.375.405 1.722 1H5a1 1 0 1 0 0 2h.722C5.375 8.595 4.737 9 4 9z" fill={'#ea001b'} />
        <Path d="M34 2c-7.72 0-14 6.28-14 14s6.28 14 14 14 14-6.28 14-14S41.72 2 34 2zm7.707 15.707-6.999 6.999A1.01 1.01 0 0 1 34 25a1.01 1.01 0 0 1-.708-.294l-6.999-6.999a.999.999 0 1 1 1.414-1.414L33 21.586V8a1 1 0 1 1 2 0v13.586l5.293-5.293a.999.999 0 1 1 1.414 1.414z" fill={'#ea001b'} />
    </Svg>
);
