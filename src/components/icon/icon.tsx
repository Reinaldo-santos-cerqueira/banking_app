import React from 'react';
import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';
import { Box } from '@components';
import { Pressable } from 'react-native';
import {
    BackArrow,
    CardChip,
    Email,
    Eye,
    EyeOff,
    HomeICon,
    MasterCard,
    MyCardIcon,
    PadLock,
    Phone,
    Search,
    SettingsIcon,
    StatisticsIcon,
    User,
    WifiIcon
} from '@assets';

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
    circleColor?: ThemeColors;
    colorArea?: ThemeColors;
}
export function Icon({ name, color = 'backgroundContrast', size, onPress, circleColor = 'backgroundContrast', colorArea }: IconProps) {
    const { colors } = useAppTheme();
    const SVGIcon = iconRegistry[name];
    if (colorArea) {
        return (
            <Box
                backgroundColor={colorArea}
                borderRadius='s21'
                width={42}
                height={42}
                alignItems='center'
                justifyContent='center'
            >
                <Pressable
                    onPress={onPress}
                    hitSlop={10}
                >
                    <SVGIcon color={colors[color]} size={size} circleColor={colors[circleColor]} />
                </Pressable>
            </Box>
        );
    }
    else if (onPress) {
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
    eyeOff: EyeOff,
    phone: Phone,
    user: User,
    padLock: PadLock,
    home: HomeICon,
    settings: SettingsIcon,
    myCard: MyCardIcon,
    statistic: StatisticsIcon,
    search: Search,
    wifi: WifiIcon,
    cardChip: CardChip,
    masterCard: MasterCard
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;