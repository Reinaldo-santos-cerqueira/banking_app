import React from 'react';
import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';
import { Pressable } from 'react-native';
import { BackArrow, Email, Eye, EyeOff } from '@assets';

export interface IconBase {
    size?: number;
    color?: string;
    circleColor?: string
}

export interface IconProps {
    name: IconName;
    color?: ThemeColors;
    size?: number;
    onPress?: () => void;
    circleColor?: ThemeColors
}
export function Icon({ name, color = 'backgroundContrast', size, onPress, circleColor = 'backgroundContrast' }: IconProps) {
    const { colors } = useAppTheme();
    const SVGIcon = iconRegistry[name];
    if (onPress) {
        return (
            <Pressable
                onPress={onPress}
                hitSlop={10}
            >
                <SVGIcon color={colors[color]} size={size} circleColor={colors[circleColor]} />
            </Pressable>
        );
    }
    return <SVGIcon color={colors[color]} size={size} circleColor={colors[circleColor]} />;
}

const iconRegistry = {
    backArrow: BackArrow,
    email: Email,
    eye: Eye,
    eyeOff: EyeOff
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;