
import { IconBase } from '@components';
import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
export const MoneyDown = ({ size = 20 }: IconBase) => (
    <Svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
        <G >
            <Path d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402" stroke="#861D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12 7.5V16.5" stroke="#861d1d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </G>
        <Path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#861D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M22 6V2H18" stroke="#861D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 7L22 2" stroke="#861D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

    </Svg>
);
