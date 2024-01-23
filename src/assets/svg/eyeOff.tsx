import React from 'react';

import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';

import { IconBase } from '@components';

export function EyeOff({ size = 20 }: IconBase) {

    return (

        <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">

            <G clipPath="url(#clip0_302_1078)">

                <Path d="M9.33507 12.6685C8.41435 11.7478 8.41435 10.254 9.33507 9.33141C10.2558 8.41069 11.7497 8.41069 12.6722 9.33141C13.5929 10.2521 13.5929 11.746 12.6722 12.6685C11.7497 13.5911 10.2567 13.5911 9.33507 12.6685Z" stroke="#A2A2A7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

                <Path d="M18.3398 11.0023C18.3398 11.5204 18.216 12.0331 17.9766 12.5053C16.7414 14.9392 14.0122 16.5046 11.0034 16.5046C7.99454 16.5046 5.26541 14.9392 4.03014 12.5053C3.79079 12.0331 3.66699 11.5204 3.66699 11.0023C3.66699 10.4842 3.79079 9.97153 4.03014 9.49925C5.26541 7.0654 7.99454 5.5 11.0034 5.5C14.0122 5.5 16.7414 7.0654 17.9766 9.49925C18.216 9.97153 18.3398 10.4842 18.3398 11.0023Z" stroke="#A2A2A7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

            </G>

            <Path d="M18 3L10.5 10.5L3 18" stroke="#A2A2A7" />

            <Defs>

                <ClipPath id="clip0_302_1078">

                    <Rect width="22" height="22" fill="white" />

                </ClipPath>

            </Defs>

        </Svg>

    );
}